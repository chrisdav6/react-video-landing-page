import React from 'react';
import explore from './img/explore.mp4';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const App = () => {
  return (
    <div className='app'>
      {/* <FaFacebookF />
      <FaInstagram />
      <FaTwitter />
      <FaBars />
      <FaTimes /> */}
      <video className='video' src={explore} autoPlay muted loop></video>
    </div>
  );
};

export default App;
