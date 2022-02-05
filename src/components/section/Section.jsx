import React from 'react';
import './section.css';

const Section = ({ name, image }) => (

  <div className="section">

    <div className="container">
      <img src={image} id="weather-img" />
      <div className="overlay">
        <div className="text">{name}</div>
      </div>
    </div>
  </div>
);

export default Section;