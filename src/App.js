import React, { useState } from 'react';
import explore from './img/explore.mp4';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const App = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className='app'>
      <section className={`showcase ${active && 'active'}`}>
        <header>
          <h2 className='logo'>Travel</h2>
          <div
            className={`toggle ${active && 'active'}`}
            onClick={handleClick}
          ></div>
        </header>

        <video className='video' src={explore} autoPlay muted loop></video>

        <div className='overlay'></div>

        <div className='text'>
          <h2>Never Stop</h2>
          <h3>Exploring the World</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            deserunt! Dolorum sed distinctio suscipit labore rem aut eligendi
            aspernatur rerum.
          </p>
          <a href='#'>Explore</a>
        </div>

        <ul className='social'>
          <li>
            <a href='#'>
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href='#'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href=''>
              <FaInstagram />
            </a>
          </li>
        </ul>
      </section>

      <div className={`menu ${active && 'active'}`}>
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
