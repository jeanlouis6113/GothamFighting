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
                <div>
                    <Link className="imageCarrousel" to='/PageBio/characters/370'>
                        <img src="./images/theJokerCarrousel.webp" alt="The Joker"></img>
                    </Link>
                </div>
                <div>
                    <Link to='/PageBio/characters/70'>
                        <img className="imageBonus" src="./images/batmanCarrousel.webp" alt="Batman"/>
                    </Link>
                </div>
                <div>
                    <Link to='/PageBio/characters/558'>
                        <img src="./images/HommeMystere.png" alt="Riddler"/>
                    </Link>
                    <Video className="masquer"/>
                </div>
                <div>
                    <Link to='/PageBio/characters/514'>
                        <img src="./images/thePenguinCarrousel.jpeg" alt="The Penguin"/>
                    </Link>
                </div>
            </AwesomeSlider>
        </Link>
    );

}
export default Carrousel;