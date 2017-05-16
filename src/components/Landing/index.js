import React, { Component } from 'react';
import img1 from './noders1.jpg';
import img2 from './noders2.jpg';
import img3 from './noders3.jpg';
import img4 from './noders4.jpg';
import nodersLogo from './nodersLogo.png';
import './index.css';

class App extends Component {
  render() {
    const imgArrs = [img1, img2, img3, img4];
    const item = imgArrs[Math.floor(Math.random()*imgArrs.length)];
    return (
      <div className='landing'>
        <div className='backgroundImageContainer' style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7) ), url("${item}")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
          <img src={nodersLogo} className='nodersLogo' />
          <h1 className='title'>¿Porqué? Porque nos gusta</h1>
          <hr className='separator' />
          <h3 className='subTitle'>Somos la comunidad de NodeJS y JS en Lationamérica!</h3>
        </div>
      </div>
    );
  }
}

export default App;
