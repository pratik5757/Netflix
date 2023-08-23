import React from 'react';
import './NetflixMain.css';
import NetflixRegister from './NetflixRegister';

const NetflixMain = () => {
  return (
    <div className='text-white'>
      <h1>Unlimited movies, TV shows and more</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <div className='register'>
        <NetflixRegister />
      </div>
    </div>
  );
};

export default NetflixMain;
