import React from 'react';
import './footer.css';
import {  RiGithubFill, RiLinkedinBoxFill, RiInstagramFill } from 'react-icons/ri';
import { Link as Scroll} from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading section__padding">
        <h4>Do you like my work?</h4>
      </div>

      <div className="contact-me">
      <h4>Contact me</h4>
      </div>
      <div className="footer-links">
       
        <div className="footer-links-logo">
          {/* <img src={logo} alt="logo" /> */}
          <div className="navbar-menu-links-icons">
              <p className="navbar-git-icon"><a href="https://github.com/denisdanailov">
                <RiGithubFill color="#fff" size={29} />
              </a></p>
              <p className="navbar-linked-icon"><a href="https://www.linkedin.com/in/denis-danailov-36b077192">
                <RiLinkedinBoxFill color="#fff" size={29} />
              </a></p>
              <p className="navbar-insta-icon"><a href="https://www.instagram.com/denisdanailov/">
                <RiInstagramFill color="#fff" size={29} />
              </a></p>
            </div>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <Scroll to="home" smooth={true}>
          <p>Home</p>
          </Scroll>
          <Scroll to="projects" smooth={true}>
          <p>Projects</p>
          </Scroll>
          <Scroll to="about" smooth={true}>
          <p>About me</p>
          </Scroll>
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

