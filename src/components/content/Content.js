import React, { Component } from 'react';
import Song from './song/Song';
import NoPosts from './NoPosts';
// import { songs } from '../../data';
import './Content.css';

class Content extends Component {

  render() {
    return (
      <div className="content-container">
        {
          this.props.songs.length ? (
            <div className="content">
              <div className="songs-container">
                <ul>
                  {this.props.songs.map(song => {
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
          ) : (
            <NoPosts />
          )
        }
      </div>
    );
  }

}

export default Content;
