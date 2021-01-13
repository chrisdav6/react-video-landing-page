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
      <section className='showcase'>
        <header>
          <h2 className='logo'>Travel</h2>
          <div className='toggle'></div>
        </header>

        <video className='video' src={explore} autoPlay muted loop></video>

        <div className='overlay'></div>

        <div className='text'>
          <h2>Never Stop</h2>
          <h3>Exploring the World</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            deserunt! Dolorum sed distinctio suscipit labore rem aut eligendi
            aspernatur rerum?
          </p>
          <a href='#'>Explore</a>
        </div>

        <ul className='social'>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </section>

      <div className='menu'>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>News</a>
          </li>
          <li>
            <a href='#'>Destination</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
