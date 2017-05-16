import React, { Component } from 'react';
import './index.css';

class Description extends Component {
  render() {
    return (
      <div className='description'>
        <div className='descriptionContainer'>
          <h1 className='title'>Noders</h1>
          <h3 className='subTitle'>¿Que es Noders?</h3>
          <p>En Noders creamos y mantenemos una comunidad global alrededor de JavaScript, NodeJS y su ecosistema en LatinoAmérica y el Mundo. Cursos, talleres, workshops, hackatones y presentaciones!</p>
          <p>¿Tienes algo en mente?</p>
          <p>¡Contáctanos!</p>
          <hr className='separator' />
        </div>
      </div>
    );
  }
}

export default Description;
