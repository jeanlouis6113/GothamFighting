import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import ButtonSettings from './ButtonSettings';
import Carrousel from './Carrousel'
import ButtonBio from './ButtonBio';

class PageHome extends React.Component {
    batSignal = () => {
        const video = document.querySelector(".masquer");
        video.setAttribute("class", "");
        const imageB = document.getElementById("imageBonus");
        imageB.setAttribute("class", "masquer");
        
    };
    render() {
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
                <Grid container direction="column">
                    <Grid container justify="center">
                        <Grid item xs={9}>
                        <h1 onClick={this.batSignal}>Gotham Fighting</h1>
                        </Grid>
                        <Grid item xs={9} >
                            <p class="sous-description" >Welcome to Gotham Fighting, in this application you will have the possiblity to check the information of a character by clicking on it's picture, or you can select two heroes in order to make them fight on a random arena.<br/> Now click on "continue" and enjoy !</p>
                        <Carrousel />
                        </Grid>
                    </Grid>
                
                    <Grid container direction="row" justify="center">
                        <Grid>
                        <ButtonBio />
                        </Grid>
                    </Grid>
                    </Grid>
            </div>
            
        )
    }
}

export default PageHome;