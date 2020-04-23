import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';

function Carrousel() {
    return (
    <Link to="/">    
        <AwesomeSlider>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>DU TEXTE</div>
        </AwesomeSlider>
    </Link>
);
}
export default Carrousel;