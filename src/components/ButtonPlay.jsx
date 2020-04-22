import React from 'react';
import './ButtonsHomePage.scss';

class ButtonPlay extends React.Component {
    render() { 
        return ( 
            <div class="wrapper-button">
                <p class="btn-homepage" data-text="play">Play</p>
            </div>
        );
    }
}
export default ButtonPlay;