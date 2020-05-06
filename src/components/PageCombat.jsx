import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import ButtonSettings from './ButtonSettings';
import {Combat} from './Combat';

export class PageCombat extends React.Component {
    state = {
        perso1:{
            stat1: "",
            stat2: "",
            stat3: ""
        } ,
        perso2: {
            stat1: "",
            stat2: "",
            stat3: ""
        }
    }

    componentDidMount() {
        const results = Combat(70, 300);
        // this.setState({perso1: results[0], perso2: results[1]});
    }

    render() {
        const {perso1, perso2} = this.state;
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
                {/* <Combat /> */}
                {/* {perso1.stat1 !== "" && <p>{perso1.stat1}</p>}
                {perso2.stat1 !== "" && <p>{perso2.stat1}</p>} */}
            </div>
            </div>
        )
    }
}

export default PageCombat;