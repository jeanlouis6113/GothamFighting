import React from 'react';
import './ButtonsHomePage.scss';
import { Link } from 'react-router-dom';

class ButtonPlay extends React.Component {
    render() { 
        // console.log("ID 1 : ", this.props.id1);
        // console.log("ID 2 :", this.props.id2);
        return (
            <div className="wrapper-button">
                <Link to={{
                    pathname: "/PageCombat",
                    state: {
                        perso1: this.props.id1,
                        perso2: this.props.id2
                    }}}>
                    <p className="btn-homepage" data-text="Fight">Fight</p>
                </Link>
            </div>
        );
    }
}

export default ButtonPlay;