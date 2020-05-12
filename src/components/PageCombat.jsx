import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import ButtonSettings from './ButtonSettings';
// import {Combat} from './Combat';
import CombatTest from './CombatTest';

export class PageCombat extends React.Component {
    state = {
        perso1: {
            stat1: "",
            stat2: "",
            stat3: ""
        },
        perso2: {
            stat1: "",
            stat2: "",
            stat3: ""
        }
    }



    render() {
        const { perso1, perso2 } = this.state;
        const { idPersoOne, idPersoTwo } = this.props;
        return (
            <Grid container direction="row" alignItems="center" justify="center">
                <Grid item xs={12} direction="row" alignItems="center" justify="center">
                    <CombatTest idPerso1={idPersoOne} idPerso2={idPersoTwo} />
                    {perso1.stat1 !== "" && <p>{perso1.stat1}</p>}
                    {perso2.stat1 !== "" && <p>{perso2.stat1}</p>}
                </Grid>
            </Grid>
        )
    }
}

export default PageCombat;