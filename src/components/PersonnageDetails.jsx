import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import ButtonSettings from './ButtonSettings';
import ButtonBio from './ButtonBio';
import './FloatingImage.scss';

class PersonnageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: {
                response: '',
                id: '',
                name: '',
                powerstats: '',
                biography: '',
                appearance: '',
                work: '',
                connections : '',
                image: ''
            }
        };
    this.loadPersonnageDetails = this.loadPersonnageDetails.bind(this);
    }

    // Lance l'appel à l'API lors du montage du composant
    componentDidMount() {
        const characterId = this.props.match.params.characterId;
        this.loadPersonnageDetails(characterId);
    }


    loadPersonnageDetails(characterId) {
        const url = `https://www.superheroapi.com/api.php/108881107445202/${characterId}`;
        // Use axios to get data from the url
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                this.setState({ character: data });
            });
    }
    

    render() {
        const character = this.state.character;
        return (
        
        <div className="pageDetails">
            <Grid container justify="space-between">
                    <Grid container item xs={1}>
                        <Logo />
                    </Grid>
                    <Grid>
                        <ButtonSettings />              
                    </Grid>
            </Grid>
            
            <Grid container direction="row" justify="center" alignItems="center" className="">
                <Grid item xs={12}>
                <h2 id="character-name" class="text-center">{character.name}</h2>
                </Grid>
                <Grid item xs={12} class="text-center"> 
                    <p class="short-description">The character {character.name} is the hidden identity of {character.biography["full-name"]}.</p>
                </Grid>
            </Grid>

            <Grid container direction="row" justify="center" alignItems="flex-start" className="">
                <Grid item xs={5}>
                    <Grid container direction="row" alignItems="flex-start" justify="space-between">
                        <Grid item xs={5}>
                            <h3>Identity</h3>
                            <ul>
                                <li>Place of Birth: {character.biography["place-of-birth"]}</li>
                                <li>First Appearance: {character.biography["first-appearance"]}</li>
                                <li>Publisher: {character.biography.publisher}</li>
                                <li>Aliases: {`${character.biography.aliases}`}</li>
                                <li>Alignment: {character.biography.alignment}</li>
                            </ul>
                        </Grid>

                        <Grid item xs={5}>
                            <h3>Appearance</h3>
                            <ul>
                                <li>Height: {`${character.appearance.height}`}</li>
                                <li>Weight: {`${character.appearance.weight}`}</li>
                                <li>Race: {character.appearance.race}</li>
                                <li>Gender: {character.appearance.gender}</li>
                            </ul>
                        </Grid>
                            
                        <Grid container >
                            <Grid item xs={12}>
                            <h3>Work</h3>
                            <ul>
                                <li>Occupation: {character.work.occupation}</li>
                                <li>Base of operation: {`${character.work.base}`}</li>
                            </ul>
                            </Grid>

                            <Grid item xs={12}>
                                <h3>Connections</h3>
                                <ul>
                                    <li>Group Affiliation: {character.connections["group-affiliation"]}</li>
                                    <li>Relatives: {`${character.connections.relatives}`}</li>
                                </ul>
                            </Grid>
                        </Grid> 
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid container direction="column" alignItems="center" justify="flex-start">
                        <Grid item>
                            <h3>Powerstats</h3>
                        </Grid>
                        
                        <Grid item>
                            <p>Intelligence: {character.powerstats.intelligence}</p>
                            <p>Strength: {character.powerstats.strength}</p>
                            <p>Speed: {character.powerstats.speed}</p>
                            <p>Durability: {character.powerstats.durability}</p>
                            <p>Power: {character.powerstats.power}</p>
                            <p>Combat: {character.powerstats.combat}</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={3}>
                    <Grid container direction="column" alignContent="center" justify="center" className="  wrapper-image">
                        <Grid item xs={10} className="floating-box animated-background">
                            <img src={character.image.url} alt={character.name}/>
                        </Grid>
                    </Grid>
                </Grid>

                <ButtonBio />
            </Grid>
            
        </div>
        );
    };
        
}

export default PersonnageDetails;