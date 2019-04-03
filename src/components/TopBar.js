import React from 'react';
import '../styles/Base.scss';

class TopBar extends React.Component {
  render() {
    return(
      <div className='top-bar'>
        <h1 className='top-bar_heading'>LOVELORN REGAL</h1>
        <p className='top-bar_accolade'>"2012 Colorado solo artist of the year" -Bridging the Music</p>
      </div>
    )
  }
};

export default TopBar;