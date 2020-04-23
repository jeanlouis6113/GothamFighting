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
        console.log(this.state.isToggleOn)
    }
    //
    render() { 
        return ( 
            <div id="seetingsIcon" onClick={this.handleClick}>
                <img id="settingsIcon" src='./images/paramIconGotham.svg' alt="Settings Button"/>
            </div>
        );
    }
}

export default ButtonSettings;