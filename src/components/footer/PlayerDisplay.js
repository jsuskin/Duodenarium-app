import React, { Component } from 'react';

class PlayerDisplay extends Component {

  render() {
    return (
      <div className="player-display">
        <div className="player-display-info">
          <p className="player-display-data player-display-artist-name">
            Artist: {this.props.artist ? this.props.artist : '<nothing selected>'}
          </p>
          <p className="player-display-data player-display-song-name">
            Song: {this.props.song ? this.props.song : '<nothing selected>'}
          </p>
        </div>
        <div className="player-display-time">
          <span className="remaining">{this.props.remaining ? this.props.remaining.length < 3 ? `0:${this.props.remaining}` : this.props.remaining : '0:00'}</span>&nbsp;/&nbsp;
          <span className="duration">{this.props.duration ? this.props.duration.length < 3 ? `0:${this.props.duration}` :this.props.duration : '0:00'}</span>
        </div>
      </div>
    );
  }

}

export default PlayerDisplay;
