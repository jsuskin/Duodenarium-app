import React, { Component } from 'react';
import ExternalLinks from './ExternalLinks';

class Song extends Component {

  render() {
    const { artist, song, url, image, tags, externalLinks, handleSelectSong } = this.props;
    return (
      <li className="song" onClick={(e) => handleSelectSong(e, url, artist, song)} title="Click to play">
        <div className="song-container">
          <div className="images">
            <img src={image} alt="album cover" className="album-cover" />
            <ExternalLinks {...externalLinks} />
          </div>
          <div className="song-info">
            <h3 className="artist-name">{artist}</h3>
            <h4 className="song-title">{song}</h4>
            <p className="tags">
              <strong>Tags</strong>: {tags.join(', ')}
            </p>
          </div>
        </div>
      </li>
    );
  }

}

export default Song;
