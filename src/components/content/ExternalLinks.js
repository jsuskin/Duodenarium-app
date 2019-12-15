import React, { Component } from 'react';
import discogsLogo from '../../data/img/discogs_vinyl_record_mark.png';
import bandcampLogo from '../../data/img/bandcamp_logo.png';

class ExternalLinks extends Component {

  render() {
    return (
      <div className="external-links">
        <a href={this.props.discogs} target="_blank" rel="noopener noreferrer">
          <img src={discogsLogo} alt="discogs logo" className={`link-logo discogs-logo${this.props.discogs ? '' : ' disabled-link'}`} name="discogs-logo" />
        </a>
        <a href={this.props.bandcamp} target="_blank" rel="noopener noreferrer">
          <img src={bandcampLogo} alt="bandcamp logo" className={`link-logo bandcamp-logo${this.props.bandcamp ? '' : ' disabled-link'}`} name="bandcamp-logo" />
        </a>
        <a href={this.props.soundcloud} target="_blank" rel="noopener noreferrer">
          <iframe
            title="Soundcloud"
            className={`link-logo soundcloud-logo${this.props.soundcloud ? '' : ' disabled-link'}`}
            allowtransparency="true"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fundefined&color=black_white&size=24"
          >
          </iframe>
        </a>
      </div>
    );
  }

}

export default ExternalLinks;
