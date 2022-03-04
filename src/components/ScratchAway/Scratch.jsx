import React from 'react';
import './scratch.scss';
import COVER from '../../assets/skills/finalcover.png';
import {Link} from 'react-scroll';

function Scratch() {

    setTimeout(() => {
        let scratch = document.getElementById("scratch"),
        scratchCanvas = scratch.getContext('2d'),
        brushRadius = (scratch.width / 100) * 5,
        img = new Image();
    
        if (brushRadius < 50) { brushRadius = 50 };
    
        img.onload = function(){  
            scratchCanvas.drawImage(img, 0, 0, scratch.width, scratch.height);
        };

        if (window.devicePixelRatio >= 2) {
            img.src = COVER;
        } else {
            img.src = COVER;
        };
    
        function detectLeftButton(event) {
            if ('buttons' in event) {
                return event.buttons === 1;
            } else if ('which' in event) {
                return event.which === 1;
            } else {
                return event.button === 1;
            };
        };
    
        function getBrushPos(xRef, yRef) {
            let scratchRect = scratch.getBoundingClientRect();
            return {
            x: Math.floor((xRef-scratchRect.left)/(scratchRect.right-scratchRect.left)*scratch.width),
            y: Math.floor((yRef-scratchRect.top)/(scratchRect.bottom-scratchRect.top)*scratch.height)
            };
        };
          
        function drawDot(mouseX,mouseY){
            scratchCanvas.beginPath();
            scratchCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
            scratchCanvas.fillStyle = '#000';
            scratchCanvas.globalCompositeOperation = "destination-out";
            scratchCanvas.fill();
        };
    
        scratch.addEventListener("mousemove", function(e) {
            let brushPos = getBrushPos(e.clientX, e.clientY);
            let leftBut = detectLeftButton(e);
            if (leftBut == 1) {
                    drawDot(brushPos.x, brushPos.y);
            }
            }, false);
    
        scratch.addEventListener("touchmove", function(e) {
            e.preventDefault();
            let touch = e.targetTouches[0];
            if (touch) {
            let brushPos = getBrushPos(touch.pageX, touch.pageY);
                drawDot(brushPos.x, brushPos.y);
            }
        }, false);
    }, 1000);


    return (
        <section className="scratch" id="skills">
            <figure id="scratchContainer">
                <canvas id="scratch" width="900" height="700"></canvas>
            </figure>

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


export default Scratch;