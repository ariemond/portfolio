import React from 'react';
import '../Header/header.scss';
import {Link} from 'react-scroll';

function Header() {
    return (
      <nav role="navigation" className="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link activeClass="active" to="home" spy={true} smooth={true}><li className="header__list-item">Home</li></Link>
            <Link to="about" spy={true} smooth={true}><li className="header__list-item">About</li></Link>
            <Link to="skills" spy={true} smooth={true}><li className="header__list-item">Skills</li></Link>
            <Link to="projects" spy={true} smooth={true}><li className="header__list-item">Projects</li></Link>
            <Link to="contact" spy={true} smooth={true}><li className="header__list-item">Contact</li></Link>
          </ul>
        </div>
        <div className="navigation__contact">
            <ul className="navigation__contact-list">
                <li><a href="https://www.linkedin.com/in/arianaemond/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li><a href="https://github.com/ariemond" target="_blank"><ion-icon name="logo-github"></ion-icon></a></li>
                <li><a href="mailto:emondariana@gmail.com"><ion-icon name="mail-outline"></ion-icon></a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
