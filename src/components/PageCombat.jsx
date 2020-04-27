import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import ButtonSettings from './ButtonSettings';
export class PageCombat extends React.Component {

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
            <div className="couleur">
                <h1>Page en construction</h1>
            </div>
            </div>
        )
    }
}

export default PageCombat;