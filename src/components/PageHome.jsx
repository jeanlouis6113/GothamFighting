import React from 'react';
import Grid from '@material-ui/core/Grid';
import Carrousel from './Carrousel'
import ButtonBio from './ButtonBio';
import ButtonPlay from './ButtonPlay';

class PageHome extends React.Component {
    render() {
        return (
            <div>
                <Grid container direction="column">
                    <Grid container justify="center">
                        <Grid item xs={9}>
                        <h1>Gotham Fighting</h1>
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

export default PageHome