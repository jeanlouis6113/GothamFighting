import React from 'react';
import './ButtonsHomePage.scss';
import { Link } from 'react-router-dom';

class ButtonBio extends React.Component {
    render() { 
        return ( 
            <div class="wrapper-button">
                <Link to="/PageBio">
                  <p class="btn-homepage" data-text="bio">Bio</p>
                </Link>
            </div>
        );
    }
}

export default ButtonBio;