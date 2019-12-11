import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class PlayerControls extends Component {

  render() {
    return (
      <div className="player-controls">
        <Icon name="play" className="player-icon" size="big" title="play" onClick={this.props.handlePlay} />
        <Icon name="pause" className="player-icon" size="big" title="pause" onClick={this.props.handlePause} />
        <Icon name="stop" className="player-icon" size="big" title="stop" onClick={this.props.handleStop} />
        <Icon name="backward" className="player-icon" size="big" title="prev" />
        <Icon name="forward" className="player-icon" size="big" title="next" />
      </div>
    );
  }

}

export default PlayerControls;
