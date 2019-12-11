import React, { Component } from 'react';

class VolumeDisplay extends Component {

  render() {
    return (
      <div className="volume-display">
        <div className={`volume-bar volume-1${this.props.volume < 0.2 ? ' volume-bar-disabled' : ''}`} onClick={() => this.props.handleVolumeChange(0.2)}></div>
        <div className={`volume-bar volume-2${this.props.volume < 0.4 ? ' volume-bar-disabled' : ''}`} onClick={() => this.props.handleVolumeChange(0.4)}></div>
        <div className={`volume-bar volume-3${this.props.volume < 0.6 ? ' volume-bar-disabled' : ''}`} onClick={() => this.props.handleVolumeChange(0.6)}></div>
        <div className={`volume-bar volume-4${this.props.volume < 0.8 ? ' volume-bar-disabled' : ''}`} onClick={() => this.props.handleVolumeChange(0.8)}></div>
        <div className={`volume-bar volume-5${this.props.volume < 1 ? ' volume-bar-disabled' : ''}`} onClick={() => this.props.handleVolumeChange(1)}></div>
      </div>
    );
  }

}

export default VolumeDisplay;
