import React from 'react';
import './section.css';

const Section = ({ name, image, url }) => (

  <div className="section">

    <div className="container">
      <img src={image} id="weather-img" alt="logo" />
      <div className="overlay">
        <div className="text" onClick={()=> window.open(url)}>{name}</div>
      </div>
    </div>
  </div>
);

export default Section;