import React from 'react';
import './skills.scss';
import {Link} from 'react-scroll';
import HTML from '../../assets/skills/htmllogo.png';
import CSS from '../../assets/skills/csslogo.png';
import SASS from '../../assets/skills/sasslogo.png';
import JS from '../../assets/skills/jslogo.png';
import REACT from '../../assets/skills/reactlogo.png';
import GIT from '../../assets/skills/gitlogo.png';
import GITHUB from '../../assets/skills/githublogo.png';
import NODE from '../../assets/skills/nodelogo.png';
import EXPRESS from '../../assets/skills/expresslogo.png';
import FIRE from '../../assets/skills/firebaselogo.png';
import STRIPE from '../../assets/skills/stripe-logo.png';
import JIRA from '../../assets/skills/jira-logo.png';

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills__logo-container">
                <img className="skills__logo" src={HTML} alt='html logo'></img>
                <img className="skills__logo" src={CSS} alt='css logo'></img>
                <img className="skills__logo" src={SASS} alt='sass logo'></img>
                <img className="skills__logo" src={JS} alt='javascript logo'></img>
                <img className="skills__logo" src={REACT} alt='react logo'></img>
                <img className="skills__logo" src={GIT} alt='git logo'></img>
                <img className="skills__logo" src={GITHUB} alt='github logo'></img>
                <img className="skills__logo" src={NODE} alt='node logo'></img>
                <img className="skills__logo" src={EXPRESS} alt='express logo'></img>
                <img className="skills__logo" src={FIRE} alt='firebase logo'></img>
                <img className="skills__logo" src={STRIPE} alt='stripe logo'></img>
                <img className="skills__logo" src={JIRA} alt='stripe logo'></img>
            </div>
            <Link to="projects" className="skills-link" spy={true} smooth={true}>
                <span className="skills-link__arrow">
                    <span></span>
                    <span></span>
                </span>
                <span className="skills-link__line"></span>
                <span className="skills-link__text">Projects</span>
            </Link>
        </section>
    );
};

export default Skills
