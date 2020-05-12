import React from 'react';
import PersonnageList from './PersonnageList';
import Logo from './Logo';
import ButtonSettings from './ButtonSettings';
import Grid from '@material-ui/core/Grid';




export class pageBio extends React.Component {

    render() {
        return (
            <div >
                <Grid container justify="space-between">
                    <Grid container item xs={1}>
                        <Logo />
                    </Grid>
                    <Grid>
                        <ButtonSettings />              
                    </Grid>
                </Grid>
                <PersonnageList setPersoOne={this.props.setPersoOne} persoOne={this.props.persoOne} setPersoTwo={this.props.setPersoTwo} persoTwo={this.props.persoTwo} apiCharacters={this.props.apiCharacters} />
            </div>
        )
    }
    
}


export default pageBio;