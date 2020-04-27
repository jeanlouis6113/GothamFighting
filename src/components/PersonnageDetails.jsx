import React, { Component } from 'react';
import axios from 'axios';
import PersonnageList from './PersonnageList';
import Grid from '@material-ui/core/Grid';


/* characterId: '',
        name: '',
        fullName: '',
        placeOfBirth: '',
        firstAppearance: '',
        publisher: '',
        aliases: '',
        alignments: '',
        groupAffiliation: '',
        relatives: '',
        height: '',
        weight: '',
        race: '',
        gender: '',
        occupation: '',
        baseOfOperation: '',
        image: '',
        isDisplayed: false, 

const idList = [63, 69, 165, 309, 457, 522, 538, 561, 609, 370, 514, 386, 461, 60, 558, 576, 678, 491];


                powerstats: '',
                biography: '',
                appearance: '',
                work: '',
                connections : '',
*/

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


    componentDidMount() {
        const characterId = this.props.match.params.characterId;
        console.log("mount: ", characterId);
        // for (let i = 0 ; i < idList.length; i++) {
        //     const characterId = idList[i]
        //     this.loadPersonnageDetails(characterId);
        // }
        this.loadPersonnageDetails(characterId);
    }

    // componentDidMount() {
    //     const characterId = this.props.match.params.characterId;
    //     console.log(characterId);
    //     this.loadCharacterDetails(characterId);
    // }

    loadPersonnageDetails(characterId) {
        const url = `https://www.superheroapi.com/api.php/108881107445202/${characterId}`;
        // Use axios to get data from the url
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                console.log(`Data: ${data}`);
                this.setState({ character: data })
            });
    }
    

    // const characters = this.state.character;
    // console.log(characters);
    //     return (
    //         <ul>
    //             {characters.map(exercice => <li><PersonnageList  {...exercice} /></li>)}
    //         </ul>
    //     );


    render() {
        const character = this.state.character;
        console.log(character);
        return (
        <div>
            <Grid container direction="row" justify="center" alignItems="flex-start">
                    <Grid item xs={6}>
                        <Grid container direction="column" alignItems="flex-start" >
                            <Grid item xs={11}>
                                <h2>{character.name}</h2>
                            </Grid>
                            <Grid item xs={11} className="CharacterDetails">
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
                                <p>Full Name: {character.biography.fullName}</p>
                                <p>Alter Egos: {character.biography.alterEgos}</p>
                                <p>Aliases: {character.biography.aliases}</p>
                                <p>Publisher: {character.biography.publisher}</p>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
            
        </div>
        );
        };
        
}


export default PersonnageDetails;

// <ul className='listeTwo'>{listeTwo.map((item, index) =>
//   <li key={index}>{item}</li>
// )}</ul>
