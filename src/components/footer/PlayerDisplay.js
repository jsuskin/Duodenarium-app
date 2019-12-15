import React, { Component } from 'react';

class PlayerDisplay extends Component {

  render() {
    const { artist, song, remaining, duration } = this.props;
    return (
      <div className="player-display">
        <div className="player-display-info">
          <p className="player-display-data player-display-artist-name">
            Artist: {artist ? artist : '<nothing selected>'}
          </p>
          <p className="player-display-data player-display-song-name">
            Song: {song ? song.length > 35 ? song.slice(0, 35) + '...' : song : '<nothing selected>'}
          </p>
        </div>
        <div className="player-display-time">
          <span className="remaining">
            {
              remaining ? remaining.length < 3 ? `0:${remaining}` : remaining : '0:00'
            }
          </span>
          &nbsp;/&nbsp;
          <span className="duration">
            {
              duration ? duration.length < 3 ? `0:${duration}` :duration : '0:00'
            }
          </span>
        </div>
      </div>
    );
  }

}

export default PlayerDisplay;
