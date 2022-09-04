import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">Welcome To My Personal Portfolio</h1>
        <p>I'm Denis a junior developer with a creative background in Design. Absolutely dedicated to details to each of my work. Motivated and always ready to learn something new. </p>
      </div>
      <div className="header-image">
        <img src="https://res.cloudinary.com/diozchjq4/image/upload/v1662284246/portfolio/ai.e753fe6e801fc6fddc1f-min_na68v8.png"  alt="logo"/>
      </div>
    </div>
  );
};

export default Header;
