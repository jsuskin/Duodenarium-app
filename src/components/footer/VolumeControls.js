import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class VolumeControls extends Component {

  render() {
    return (
      <div className="volume-controls">
        <Icon
          name="volume down"
          className="player-icon"
          size="big"
          title="volume down"
          onClick={this.props.handleVolumeDown}
        />
        <Icon
          name="volume off"
          className="player-icon"
          size="big"
          title="mute"
          onClick={this.props.handleMute}
        />
        <Icon
          name="volume up"
          className="player-icon"
          size="big"
          title="volume up"
          onClick={this.props.handleVolumeUp}
        />
      </div>
    );
  }

}

export default VolumeControls;
