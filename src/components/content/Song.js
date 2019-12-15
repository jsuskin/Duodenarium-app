import React, { Component } from 'react';
import ExternalLinks from './ExternalLinks';

class Song extends Component {

  render() {
    const { artist, title, url, image, tags, external_links_list, handleSelectSong } = this.props;
    return (
      <li className="song" onClick={(e) => handleSelectSong(e, url, artist, title)} title={`Click to play "${title}" by ${artist.name}`}>
        <div className="song-container">
          <div className="images">
            <img src={image} alt="album cover" className="album-cover" />
            <ExternalLinks {...external_links_list} />
          </div>
          <div className="song-info">
            <h3 className="artist-name">{artist.name}</h3>
            <h4 className="song-title">{title.length > 49 ? title.slice(0, 49) + '...' : title}</h4>
            <p className="tags">
              <strong>Tags</strong>: {tags.map(tag => tag.name).join(', ')}
            </p>
          </div>
        </div>
      </li>
    );
  }

}

export default Song;
