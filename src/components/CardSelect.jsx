import React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import './HoverImage.scss';


class CardSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idOne: '',
            idTwo: ''
        };
    }



    render() {
        const { nameCharacter, urlImage } = this.props;
        return (
            <Grid container direction="row">
                <CardActionArea >
                    <CardContent className="avatarName">
                        <Typography gutterBottom="true" align="center" variant="h4">
                            {nameCharacter}
                        </Typography>
                    </CardContent>
                    <Grid container direction="row" justify="center" alignItems="center" className="cardSelected">
                        <Grid item xs={10}>
                            <img src={urlImage} alt="" className="avatarBio imgBizzare" />
                        </Grid>
                        <Grid item xs={9} className="infocard">
                            <h1>{nameCharacter}</h1>
                            <p>You can access {nameCharacter}'s stats by clicking on the button</p>
                            <button>View Stats</button>
                        </Grid>
                    </Grid>

                </CardActionArea>
            </Grid>

        )
    }
}

export default CardSelect;

