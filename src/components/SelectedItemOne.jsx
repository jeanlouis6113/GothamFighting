import React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';


class SelectedItemOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name:'Select your champ',
            image:'/images/pointMystere.jpg'
        };
    }

    mettreAjour = (idGiven, nameGiven, imageGiven) =>{
        this.setState({
            id: idGiven,
            name: nameGiven,
            image: imageGiven
        });
    }

    render() {
        const { nameCharacter, urlImage } = this.props;
        console.log("Cards props: ", nameCharacter, urlImage);
        return (
            <Grid container direction="row" >
                <CardActionArea>
                    <CardContent className="avatarName">
                        <Typography gutterBottom="true" align="center" variant="h4">
                            {this.state.name}
                        </Typography>
                    </CardContent>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={6}>
                            <img src={this.state.image} alt="" className="selectImage selectImage-One" />
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Grid>

        )
    }
}

export default SelectedItemOne;