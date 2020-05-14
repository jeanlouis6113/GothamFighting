import React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
// import './HoverImage.scss';


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
                <CardActionArea>
                    <CardContent className="avatarName">
                        <Typography gutterBottom="true" align="center" variant="h4" className="infocard">
                            {nameCharacter}
                        </Typography>
                    </CardContent>
                    <Grid container direction="row" justify="center" alignItems="center" className="cardselected">
                        <Grid item xs={6}>
                            <img src={urlImage} alt="" className="avatarBio" />
                        </Grid>
                    </Grid>
                </CardActionArea>

            </Grid>

        )
    }
}

export default CardSelect;

