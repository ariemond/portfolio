import React from 'react';
import './projects.scss';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-scroll';
import Dig from '../../assets/images/background.jpg';
import Band from '../../assets/images/bandsite.jpg';


function Projects() {
    return (
        <section className="projects" id="projects">
            <Fade up>
                <div className="grid">
                    <figure className="effect-lily">
                        <img src={Dig} alt="img12"/>
                        <figcaption>
                            <div>
                                <h2>Dig <span>In</span></h2>
                                <a href="https://github.com/ariemond/capstone-dig-in" target="_blank"  rel="noreferrer"><p>GitHub</p></a>
                                <a href="https://www.loom.com/share/fccb91e45f2a4787802a3a04280f207c" target="_blank"  rel="noreferrer"><p>Demo</p></a>
                            </div>
                        </figcaption>			
                    </figure>
                    <figure className="effect-lily">
                        <img src={Band} alt="img1"/>
                        <figcaption>
                            <div>
                                <h2>Band <span>Site</span></h2>
                                <a href="https://github.com/ariemond/ariana-emond-bandsite" target="_blank"  rel="noreferrer"><p>GitHub</p></a>
                            </div>
                        </figcaption>			
                    </figure>
                </div>
            </Fade>
            
            <Link to="contact" className="projects-link" spy={true} smooth={true}>
                <span className="projects-link__arrow">
                    <span></span>
                    <span></span>
                </span>
                <span className="projects-link__line"></span>
                <span className="projects-link__text">Contact</span>
            </Link>
        </section>
    )
}

export default Projects
