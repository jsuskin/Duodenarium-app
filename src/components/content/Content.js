import React, { Component } from 'react';
import Song from './Song';
import { songs } from '../../data';
import './Content.css';

class Content extends Component {

  render() {
    return (
      <div className="content-container">
        <div className="content">
          <div className="songs-container">
            <ul>
              {songs.map(song => {
                return (
                  <Song
                    key={song.id}
                    {...song}
                    handleSelectSong={this.props.handleSelectSong}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Content;
