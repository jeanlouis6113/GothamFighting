import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import ButtonSettings from './ButtonSettings';
import Carrousel from './Carrousel'
import ButtonBio from './ButtonBio';
import ButtonPlay from './ButtonPlay';

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
                        <Grid item xs={9}>
                        <Carrousel />
                        </Grid>
                    </Grid>
                
                    <Grid container direction="row" justify="center">
                        <Grid>
                        <ButtonBio />
                        </Grid>
                        <Grid>
                        <ButtonPlay />
                        </Grid>
                    </Grid>
                    </Grid>
            </div>
            
        )
    }
}

export default PageHome;