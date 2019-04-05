import React from 'react';
import '../styles/Base.scss';

class TopBar extends React.Component {
  render() {
    return(
      <div className='top-bar'>
        <div className="top-bar--navbar">
            <li className="top-bar--navbar_link">Home</li>
            <li className="top-bar--navbar_link">About</li>
            <li className="top-bar--navbar_link">Contact</li>
        </div>
        <div className='top-bar_info'>
          <h1 className='top-bar_info--heading'>LOVELORN REGAL</h1>
          <p className='top-bar_info--accolade'>"2012 Colorado solo artist of the year" -Bridging the Music</p>
        </div>
      </div>
    )
  }
};

export default TopBar;