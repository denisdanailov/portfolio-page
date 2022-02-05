import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading section__padding">
        <h1 className="gradient__text">Do you like my work?</h1>
      </div>

      <div className="footer-btn">
        <p>Contact me</p>
      </div>

      <div className="footer-links">
        <div className="footer-links-logo">
          {/* <img src={footer} alt="logo" /> */}
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Home</p>
          <p>Projects</p>
          <p>About me</p>
          <p>Contact me</p>
        </div>
        
      </div>
 
      <div className="footer-copyright"> 

      <p>© 2022 Denis Danailov. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

