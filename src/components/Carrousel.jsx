import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import './CaptionedStyles.scss';
import Video from './Video';
import { Link } from 'react-router-dom';


function Carrousel() {
    return (
        <Link to="/">
            <AwesomeSlider animation="cubeAnimation" className="slider-homepage" >
                <div data-src="./images/batmanCarrousel.jpeg">
                    <p>BATMAN</p>
                </div>
                <div>
                    <img id="imageBonus" src="./images/HommeMystere.png" alt=""/>
                    <Video className="masquer"/>
                </div>

                <div data-src="./images/theJokerCarrousel.webp">
                    <p>THE JOKER</p>
                </div>
                <div data-src="./images/thePenguinCarrousel.jpeg">
                    <p>THE PENGUIN</p>
                </div>
            </AwesomeSlider>
        </Link>
    );

}
export default Carrousel;