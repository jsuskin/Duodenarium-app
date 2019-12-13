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
      year: ''
    },
    today: '',
    songs: []
  }

  componentDidMount() {
    // today
    const [
      weekday,
      month,
      day,
      year
    ] = moment(new Date())._i.toString().split(' ').slice(0, 4);
    const displayedDate = `${weekdays[weekday]}, ${months[month]} ${day}, ${year}`;

    this.setState({
      ...this.state,
      selectedDate: {
        weekday: weekdays[weekday],
        month: months[month],
        day: day,
        year: year
      },
      today: displayedDate,
      songs: songs.filter(song => song.created_at === displayedDate)
    });
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

  render() {
    const { playing, volume, selectedDate, today, songs } = this.state;
    const { artist, song, url, remaining, duration } = this.state.selectedSong;

    return (
      <div className="app">
        <Header />
        <Spacer />
        <Content handleSelectSong={this.handleSelectSong} songs={songs} />
        <DateDisplay selectedDate={selectedDate} today={today} />
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
