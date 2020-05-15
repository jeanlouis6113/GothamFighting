import React from 'react';
import './ButtonsHomePage.scss';
import { Link } from 'react-router-dom';

class ButtonBio extends React.Component {
    render() { 
        return ( 
            <div className="wrapper-button">
                <Link to="/PageBio">
                    <p className="btn-homepage" data-text="Continue">Continue</p>
                </Link>
            </div>
        );
    }
}

export default ButtonBio;