import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import ButtonSettings from './ButtonSettings';
import ButtonBack from './ButtonBack';
import { Link } from 'react-router-dom';


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

    // componentDidUpdate(previousProps) {
    //     const {
    //         match: {
    //             params: { characterId }
    //         }
    //     } = this.props;
    //     const previousPostId = previousProps.match.params.characterId;
    //         if (previousPostId !== characterId) {
    //             this.loadCharacterDetails(characterId);
    //     }
    // }

    // Lance l'appel à l'API lors du montage du composant
    componentDidMount() {
        // const characterId = 63;
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
        
        <div>
            <Grid container justify="space-between">
                    <Grid container item xs={1}>
                        <Logo />
                    </Grid>
                    <Grid>
                        <ButtonSettings />              
                    </Grid>
            </Grid>
            <Link to={"/PageBio/"}>
                <ButtonBack />
            </Link>
            <Grid container direction="row" justify="center" alignItems="flex-start">
                    <Grid item xs={6}>
                        <Grid container direction="column" alignItems="flex-start" >
                            <Grid item xs={11}>
                                <h2>{character.name}</h2>
                            </Grid>
                            <Grid item xs={6} className="CharacterDetails">
                                <img src={character.image.url} alt={character.name}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="column">
                            <Grid item>
                                <h2>Reste des stats</h2>
                            </Grid>
                            <Grid item>
                                <h3>Powerstats</h3>
                                <p>Intelligence: {character.powerstats.intelligence}</p>
                                <p>Strength: {character.powerstats.strength}</p>
                                <p>Speed: {character.powerstats.speed}</p>
                                <p>Durability: {character.powerstats.durability}</p>
                                <p>Power: {character.powerstats.power}</p>
                                <p>Combat: {character.powerstats.combat}</p>
                            </Grid>

                            <Grid item>
                                <h3>Biography</h3>
                                <p>Full Name: {character.biography["full-name"]}</p>
                                <p>Alter Egos: {character.biography["alter-egos"]}</p>
                                <p>Aliases: {`${character.biography.aliases}`}</p>
                                <p>Place of Birth: {character.biography["place-of-birth"]}</p>
                                <p>First Appearance: {character.biography["first-appearance"]}</p>
                                <p>Publisher: {character.biography.publisher}</p>
                                <p>Alignment: {character.biography.alignment}</p>
                            </Grid>

                            <Grid item>
                                <h3>Appearance</h3>
                                <p>Gender: {character.appearance.gender}</p>
                                <p>Race: {character.appearance.race}</p>
                                <p>Height: {`${character.appearance.height}`}</p>
                                <p>Weight: {`${character.appearance.weight}`}</p>
                                <p>Eye Color: {character.appearance["eye-color"]}</p>
                                <p>Hair Color: {character.appearance["hair-color"]}</p>
                            </Grid>

                            <Grid item>
                                <h3>Work</h3>
                                <p>Occupation: {character.work.occupation}</p>
                                <p>Base: {`${character.work.base}`}</p>
                            </Grid>

                            <Grid item>
                                <h3>Connections</h3>
                                <p>Group Affiliation: {character.connections["group-affiliation"]}</p>
                                <p>Relatives: {`${character.connections.relatives}`}</p>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
            
        </div>
        );
    };
        
}

export default PersonnageDetails;