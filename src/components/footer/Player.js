import React, { Component } from 'react';
import PlayerDisplay from './PlayerDisplay';
import PlayerControls from './PlayerControls';
import VolumeControls from './VolumeControls';
import VolumeDisplay from './VolumeDisplay';
import './Footer.css';

class Player extends Component {

  render() {
    return (
      <div className="player">
        <PlayerControls
          handlePlay={this.props.handlePlay}
          handlePause={this.props.handlePause}
          handleStop={this.props.handleStop}
        />
        <PlayerDisplay
          artist={this.props.artist.name}
          song={this.props.song}
          remaining={this.props.remaining}
          duration={this.props.duration}
        />
        <VolumeDisplay
          volume={this.props.volume}
          handleVolumeChange={this.props.handleVolumeChange}
        />
        <VolumeControls
          handleVolumeDown={this.props.handleVolumeDown}
          handleVolumeUp={this.props.handleVolumeUp}
          handleMute={this.props.handleMute}
        />
      </div>
    );
  }

}

export default Player;
