import React from 'react';
import './about.scss';
import '../HomePage/homepage.scss';
import {Link} from 'react-scroll';
import Ari from '../../assets/images/tripleari.png';
import resume from '../../assets/images/Ariana-Emond-Resume.pdf';


function About() {

    return (
        <section className="about" id="about">
            <h2 className="about__header">About Ari</h2>
            <div className="about__text-container">
                <p className="about__text">
                    Hey! I'm Ariana. I'm a Full Stack Web Developer with a love of web design and problem solving.
                    I have a pretty diverse background. I did my undergrad in Biology ð¥¼ at Queen's University, and then decided
                    to pursue my love of cooking and baking ð©âð³ by going to culinary school. I put my new skills to use in London, England,
                    for three incredible years. I came home with the intention of opening my own cafÃ© â, but due to the pandemic, I had to adjust
                    my goals. 
                </p>
                <p className="about__text">
                    I realized that I was missing mental stimulation, and wanted to do something that used my love of problem solving,
                    while also still allowing me to be creative ð©âð¨. I decided to take a chance on web development and it was love at first line of code ð».
                    I am a fast learner and LOVE learning ð¤. You can see some of the skills I have learned below, but keep in mind I am
                    continuously learning, so this list keeps growing. Feel free to check out my <a className="about__resume" href={resume} target="_blank" rel="noreferrer">resume</a> for experience and education. 
                    If you want to chat, don't hesitate to drop me a line! ð¤ 
                </p>
            </div>
            <Link to="skills" className="about-link" spy={true} smooth={true}>
                <span className="about-link__arrow">
                    <span></span>
                    <span></span>
                </span>
                <span className="about-link__line"></span>
                <span className="about-link__text">Skills</span>
            </Link>
        </section>
    );
};

export default About