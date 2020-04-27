import React from 'react';

class ButtonSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }),
        );
        console.log(this.state.isToggleOn);
        this.playPause()
    }
    
    playPause(){
        const song = document.getElementById('settingsBtn');
        if (song.paused && song.currentTime >= 0 && !song.ended) {
            song.play();
        } else {
            song.pause();
        }
    }

    render() { 
        return ( 
            <div className="settingsIcon" onClick={this.handleClick}>
                <img id="settingsIcon" src={this.state.isToggleOn ? './images/speakerOn.png' : './images/speakerOff.png'} alt="Settings Button"/>
            </div>
        );
    }
}

export default ButtonSettings;