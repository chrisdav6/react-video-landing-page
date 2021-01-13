import React from 'react';
import explore from './img/explore.mp4';

const App = () => {
  return (
    <div className='app'>
      <video className='video' src={explore} autoPlay muted></video>
    </div>
  );
};

export default App;
