import React, { Component } from 'react';
import Header from './components/header/Header';
import Spacer from './components/header/Spacer';
import Content from './components/content/Content';
import DateDisplay from './components/date-display/DateDisplay';
import Player from './components/footer/Player';
import ReactPlayer from 'react-player';
import { weekdays, months } from './data';
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
      daysBack: 0
    },
    selectedDateFormatted: '',
    today: '',
    songs: [],
    fetchedSongs: []
  }

  fetchSongs() {
    fetch('http://localhost:3000/songs')
      .then(res => res.json())
      .then(songs => {
        this.setState({
          ...this.state,
          fetchedSongs: songs
        });
        this.getDay(0);
      })
  }

  getDay(daysBack) {
    const today = moment()._d;
    const selectedDay = moment().subtract(daysBack, 'day')._d;
    const songs = this.state.fetchedSongs;

    // console.log(this.state.fetchedSongs)
    // console.log(songs)

    this.setState({
      ...this.state,
      selectedDate: {
        daysBack: daysBack,
        weekday: weekdays[getSelectedDay(selectedDay).weekday],
        month: months[getSelectedDay(selectedDay).month],
        day: getSelectedDay(selectedDay).day,
        year: getSelectedDay(selectedDay).year
      },
      today: getSelectedDay(today).displayedDate,
      selectedDateFormatted: getSelectedDay(selectedDay).displayedDate,
      songs: songs.filter(song => convertDate(song.created_at) === getSelectedDay(selectedDay).displayedDate)
    });
  }

  componentDidMount() {

    this.fetchSongs();
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

    this.getDay(num);
  }

  render() {
    const { playing, volume, selectedDate, selectedDateFormatted, songs, today } = this.state;
    const { artist, song, url, remaining, duration } = this.state.selectedSong;

    return (
      <div className="app">
        <Header />
        <Spacer />
        {
          songs.length ? (
            <Content
              handleSelectSong={this.handleSelectSong}
              songs={songs}
            />
          ) : (
            <div className="no-posts">
              <div className="no-posts-1">No</div>
              <div className="no-posts-2">Posts</div>
              <div className="no-posts-3">Today</div>
            </div>
          )
        }
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

function getSelectedDay(sel) {
  const [
    weekday,
    month,
    day,
    year
  ] = sel.toString().split(' ').slice(0, 4);
  const displayedDate = `${weekdays[weekday]}, ${months[month]} ${day}, ${year}`;
  return { displayedDate, weekday, month, day, year }
}

function convertDate(timestamp) {
  const formatted = moment(timestamp, "YYYY-MM-DD HH:mm:ss");
  return getSelectedDay(formatted._d).displayedDate;
}

export default App;
