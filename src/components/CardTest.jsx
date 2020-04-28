import React, { Component } from 'react';

class CardTest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            urlImage:'/images/logoGotham.svg',
            nameCharacter: 'character'
        };
    }

    componentDidUpdate() {
        console.log("Props Update:", this.props);
        if (!this.state.isLoaded) {
            this.loadImage(this.props.charactersId);
        }
    }

    componentDidMount() {
        console.log("Props Mount:", this.props);
        this.loadImage(this.props.charactersId);
    }

    loadImage() {
        let url = `https://www.superheroapi.com/api.php/108881107445202/${this.props.charactersId}`;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        urlImage: result.image.url,
                        nameCharacter: result.name
                    });
                },
                (error) => {
                    this.setState({
                    isLoaded: true,
                    error
                    });
                }
            )
    }

    render() {
        const {isLoaded, urlImage, nameCharacter, error} = this.state;
        if (error) {
            console.log("url fetched:", urlImage)
            return (
                <div>
                    <p>Erreur : {error.message}</p>
                    <img src={urlImage} alt={nameCharacter} id="avatarBio"/>
                </div>)
        } else if (!isLoaded) {
            return <img src="/images/gothamPlaceholder.jpg" alt={nameCharacter} className="avatarBio"/>;
        } else {
            console.log("url", urlImage)
            return (
                <div>
                    <img src={urlImage} alt={nameCharacter} className="avatarBio"/>
                </div>
            );
        }
    }
}

export default CardTest;