import React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';


class CardSelect extends Component{

    render() {
        const {nameCharacter, urlImage} = this.props;
        console.log("Cards props: ", nameCharacter, urlImage);
        return (
            <Grid container direction="row">
                    <CardActionArea>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={6}>
                                <img src ={urlImage}  alt="" className="avatarBio"/>
                            </Grid>    
                        </Grid> 
                        <CardContent className="avatarName">
                            <Typography gutterBottom="true" align="center" variant="h4">
                                {nameCharacter}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
            </Grid>
            
        )
    }
}

export default CardSelect;