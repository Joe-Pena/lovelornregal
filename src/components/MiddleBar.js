import React from 'react';
import '../styles/Base.scss';
import Blue from '../music/Blue.mp3';
import AType from '../music/A-Type.mp3';
import HisHand from '../music/HisTalkingHands.mp3';
import AlbumCover from '../images/albumcover.jpg';

import MusicPlayer from 'react-responsive-music-player';

const playlistMusic = [
  {
    url: Blue,
    cover: AlbumCover,
    title: 'Blue',
    artist: ['Lovelorn Regal']
  },
  {
    url: AType,
    cover: AlbumCover,
    title: 'A-Type',
    artist: ['Lovelorn Regal']
  },
  {
    url: HisHand,
    cover: AlbumCover,
    title: 'His Talking Hands',
    artist: ['Lovelorn Regal']
  }
]

class MiddleBar extends React.Component {

  render() {
    return (
      <div className="playback-section">
        <MusicPlayer playlist={playlistMusic} />
      </div>
    )
  }
};

export default MiddleBar;