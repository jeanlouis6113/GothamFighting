import React, { Component } from 'react';


class CardSelect extends Component{

    render() {
        const {nameCharacter, urlImage} = this.props;
        console.log("Cards props: ", nameCharacter, urlImage);
        return (
            <div>
                <img src={urlImage} alt={nameCharacter} className="avatarBio"/>
            </div>
        )
    }
}

export default CardSelect;