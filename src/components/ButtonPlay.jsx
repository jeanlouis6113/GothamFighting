import React from 'react';
import './ButtonsHomePage.scss';
import { Link } from 'react-router-dom';

class ButtonPlay extends React.Component {
    render() { 
        return ( 
            <div className="wrapper-button">
                <Link to="/PageCombat">
                  <p className="btn-homepage" data-text="play">Play</p>
                </Link>
            </div>
        );
    }
}

export default ButtonPlay;