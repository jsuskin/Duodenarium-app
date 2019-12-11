import React, { Component } from 'react';
import './Header.css';
import logo from '../../data/img/angrycat_logo.png'

class Header extends Component {

  render() {
    return (
      <div className="header-container">
        <div className="header">
          <header className="app-title">
            duodenarium
            <div className="header-extra-text">Twelve Songs a Day</div>
          </header>
          <div className="cats">
            <img src={logo} alt="logo" className="cat cat1" />
            <img src={logo} alt="logo" className="cat cat2" />
            <img src={logo} alt="logo" className="cat cat3" />
            <img src={logo} alt="logo" className="cat cat4" />
            <img src={logo} alt="logo" className="cat cat5" />
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
