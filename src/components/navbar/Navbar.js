import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiGithubFill, RiLinkedinBoxFill, RiInstagramFill } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          {/* <h1>denis.danailov</h1> */}
        </div>

        <div className="navbar-links-container">
          <p><a href="/home">Home</a></p>
          <p><a href="/projects">Projects</a></p>
          <p><a href="/about">About</a></p>
        </div>
      </div>

      <div className="navbar-links-icons">
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

      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)} />}

        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container-links">
              <p><a href="/home">Home</a></p>
              <p><a href="/projects">Projects</a></p>
              <p><a href="/about">About</a></p>
            </div>
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
