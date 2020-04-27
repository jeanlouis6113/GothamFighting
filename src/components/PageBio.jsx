import React from 'react';
import PersonnageList from './PersonnageList';
import Logo from './Logo';
import ButtonSettings from './ButtonSettings';
import Grid from '@material-ui/core/Grid';




export class pageBio extends React.Component {

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
                <PersonnageList character={this.props.character} />
            </div>
        )
    }
    
}


export default pageBio;