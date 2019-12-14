import React, { Component } from 'react';
import Header from './components/header/Header';
import Spacer from './components/header/Spacer';
import Content from './components/content/Content';
import DateDisplay from './components/date-display/DateDisplay';
import Player from './components/footer/Player';
import ReactPlayer from 'react-player';
import { songs, weekdays, months } from './data';
import * as moment from 'moment';
import 'moment-duration-format';
import './App.css';

class App extends Component {
  state = {
    playing: false,
    volume: 1,
    selectedSong: {
      artist: '',
      song: '',
      url: '',
      duration: '',
      remaining: ''
    },
    selectedDate: {
      weekday: '',
      month: '',
      day: '',
      year: '',
      unformatted: {},
      daysBack: 0
    },
    selectedDateFormatted: '',
    today: '',
    songs: []
  }

  getToday(daysBack) {
    const today = moment()._d;
    const selectedDay = moment().subtract(daysBack, 'day')._d;

    const [
      weekday,
      month,
      day,
      year
    ] = selectedDay.toString().split(' ').slice(0, 4);
    const [
      weekdayToday,
      monthToday,
      dayToday,
      yearToday
    ] = today.toString().split(' ').slice(0, 4);
    const displayedDate = `${weekdays[weekday]}, ${months[month]} ${day}, ${year}`;
    const todaysDate = `${weekdays[weekdayToday]}, ${months[monthToday]} ${dayToday}, ${yearToday}`;

    this.setState({
      ...this.state,
      selectedDate: {
        // unformatted: selectedDay,
        daysBack: daysBack,
        weekday: weekdays[weekday],
        month: months[month],
        day: day,
        year: year
      },
      today: todaysDate,
      selectedDateFormatted: displayedDate,
      songs: songs.filter(song => song.created_at === displayedDate)
    });
  }

  componentDidMount() {
    this.getToday(0);
  }

  handleSelectSong = (e, url, artist, song) => {
    if(e.target.name !== "discogs-logo" && e.target.name !== "bandcamp-logo") {
      this.setState({
        playing: true,
        selectedSong: {
          ...this.state.selectedSong,
          artist: artist,
          song: song,
          url: url
        }
      })
    }
  }

  handlePlay = () => {
    this.setState({
      ...this.state,
      playing: true
    });
  }

  handlePause = () => {
    this.setState({
      ...this.state,
      playing: false
    });
  }

  handleStop = () => {
    this.setState({
      ...this.state,
      selectedSong: {
        artist: '',
        song: '',
        url: ''
      },
      playing: false
    });
  }

  handleDuration = seconds => {
    const finalTime = convertTime(seconds);
    this.setState({
      ...this.state,
      selectedSong: {
        ...this.state.selectedSong,
        duration: finalTime
      }
    })
  }

  handleProgress = state => {
    const finalTime = convertTime(state.playedSeconds);
    this.setState({
      ...this.state,
      selectedSong: {
        ...this.state.selectedSong,
        remaining: finalTime
      }
    })
  }

  handleVolumeDown = () => {
    this.setState({
      volume: (this.state.volume * 10) / 10 > 0 ? (this.state.volume * 10 - 2) / 10 : 0
    });
  }

  handleVolumeUp = () => {
    this.setState({
      volume: (this.state.volume * 10) / 10 < 1 ? (this.state.volume * 10 + 2) / 10 : 1
    });
  }

  handleMute = () => this.setState({ volume: 0 });

  handleVolumeChange = level => this.setState({ volume: level });

  handleChangeDate = (n) => {
    const num = this.state.selectedDate.daysBack + n;

    this.setState({
      ...this.state,
      selectedDate: {
        ...this.state.selectedDate,
        daysBack: num
      }
    });

    this.getToday(num);
  }

  render() {
    const { playing, volume, selectedDate, selectedDateFormatted, songs, today } = this.state;
    const { artist, song, url, remaining, duration } = this.state.selectedSong;

    return (
      <div className="app">
        <Header />
        <Spacer />
        <Content handleSelectSong={this.handleSelectSong} songs={songs} />
        <DateDisplay
          selectedDateFormatted={selectedDateFormatted}
          selectedDate={selectedDate}
          today={today}
          handleChangeDate={this.handleChangeDate}
        />
        <ReactPlayer
          url={url}
          playing={playing}
          volume={volume}
          width="0"
          height="0"
          onDuration={this.handleDuration}
          onProgress={this.handleProgress}
        />
        <Player
          artist={artist}
          song={song}
          remaining={remaining}
          duration={duration}
          volume={volume}
          handlePlay={this.handlePlay}
          handlePause={this.handlePause}
          handleStop={this.handleStop}
          handleVolumeChange={this.handleVolumeChange}
          handleVolumeDown={this.handleVolumeDown}
          handleVolumeUp={this.handleVolumeUp}
          handleMute={this.handleMute}
        />
      </div>
    )
  };
}

function convertTime(sec) {
  const seconds = sec;
  const duration = moment.duration(seconds, 'seconds');
  return duration.format("hh:mm:ss");
}

export default App;
