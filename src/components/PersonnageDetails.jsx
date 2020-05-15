import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import ButtonSettings from './ButtonSettings';
import ButtonBio from './ButtonBio';
import './FloatingImage.scss';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

const defaultOptions = {
    captionMargin: 40
};

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
                connections: '',
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

        const dataIntelligence = Number(character.powerstats.intelligence) / 100;
        const dataStrength = Number(character.powerstats.strength) / 100;
        const dataPower = Number(character.powerstats.power) / 100;
        const dataCombat = Number(character.powerstats.combat) / 100;
        const dataSpeed = Number(character.powerstats.speed) / 100;
        const dataDurability = Number(character.powerstats.durability) / 100;

        return (

            <div className="pageDetails">
                <Grid container sm={12} justify="space-between">
                    <Grid container item sm={12} md={12} lg={12} justify="space-between">
                        <Logo />
                        <ButtonSettings />
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xsm={12} md={12} lg={12} className="short-space">
                        <h2 id="character-name" class="text-center">{character.name}</h2>
                    </Grid>
                    <Grid item sm={12} md={12} lg={12} class="text-center">
                        <p class="short-description">The character {character.name} is the hidden identity of {character.biography["full-name"]}.</p>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="center" alignItems="flex-start" className="infoPerso">
                    <Grid item sm={12} md={12} lg={6}>
                        <Grid container direction="row" alignItems="flex-start" justify="space-between">
                            <Grid item sm={6} md={6} lg={5} >
                                <h3>Identity</h3>
                                <ul>
                                    <li>Place of Birth: {character.biography["place-of-birth"]}</li>
                                    <li>First Appearance: {character.biography["first-appearance"]}</li>
                                    <li>Publisher: {character.biography.publisher}</li>
                                    <li>Aliases: {`${character.biography.aliases}`}</li>
                                    <li>Alignment: {character.biography.alignment}</li>
                                </ul>
                            </Grid>

                            <Grid item sm={6} md={6} lg={5} >
                                <h3>Appearance</h3>
                                <ul>
                                    <li>Height: {`${character.appearance.height}`}</li>
                                    <li>Weight: {`${character.appearance.weight}`}</li>
                                    <li>Race: {character.appearance.race}</li>
                                    <li>Gender: {character.appearance.gender}</li>
                                </ul>
                            </Grid>

                            <Grid container >
                                <Grid item sm={6} md={6} lg={10}>
                                    <h3>Work</h3>
                                    <ul>
                                        <li>Occupation: {character.work.occupation}</li>
                                        <li>Base of operation: {`${character.work.base}`}</li>
                                    </ul>
                                </Grid>

                                <Grid item sm={6} md={6} lg={10}>
                                    <h3>Connections</h3>
                                    <ul>
                                        <li>Group Affiliation: {character.connections["group-affiliation"]}</li>
                                        <li>Relatives: {`${character.connections.relatives}`}</li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container lg={6} justify="center" alignItems="center">
                        <Grid item sm={12} md={6} lg={7}>
                            <Grid container direction="column" justify="center" alignItems="center" >
                                    <Grid item sm={5} md={8}>
                                        <h3 className="text-center">Powerstats</h3>
                                    </Grid>

                                <Grid item sm={5} md={8} lg={7}>
                                    <RadarChart className="infoPerso"
                                        captions={{
                                            // columns
                                            intelligence: `Intelligence: ${Math.round(dataIntelligence*100)}`,
                                            strength: `Strength: ${Math.round(dataStrength*100)}`,
                                            power: `Power ${Math.round(dataPower*100)}`,
                                            combat: `Combat ${Math.round(dataCombat*100)}`,
                                            speed: `Speed ${Math.round(dataSpeed*100)}`,
                                            durability: `Durability ${Math.round(dataDurability*100)}`
                                        }}
                                        data={[
                                            {
                                                data: {
                                                    intelligence: dataIntelligence,
                                                    strength: dataStrength,
                                                    power: dataPower,
                                                    combat: dataCombat,
                                                    speed: dataSpeed,
                                                    durability: dataDurability,
                                                },
                                                meta: { color: '#f5e51b' }
                                            }
                                        ]}
                                        options={defaultOptions}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item sm={12} md={4} lg={3}>
                            <Grid container direction="column" alignContent="center" justify="center" className="  wrapper-image">
                                <Grid item xs={10} className="floating-box animated-background">
                                    <img src={character.image.url} alt={character.name} />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid>
                    <ButtonBio />
                </Grid>

            </div>
        );
    };

}

export default PersonnageDetails;