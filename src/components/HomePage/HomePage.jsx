import React from 'react';
import Landing from '../Landing/Landing';
import './homepage.scss';
import {Link} from 'react-scroll';


function HomePage() {
    return (
        <section className="home">
            <Landing />
            <div className="home__title">
                <h1 className="home__title-words">FULL STACK WEB DEVELOPER</h1>
            </div>
            <Link to="about" className="link" spy={true} smooth={true}>
                <span className="link__arrow">
                    <span></span>
                    <span></span>
                </span>
                <span className="link__line"></span>
                <span className="link__text">About Me</span>
            </Link>
        </section>
    )
}
        
export default HomePage
