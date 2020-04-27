import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function CardTest(props) {
    // console.log(props);
    console.log("character: ", props.character);
    const {character} = props;
    return (
    //    const character = this.state.character
    <Card>
        <CardActionArea>
            <CardMedia
            image= {character.image.url}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {character.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {character.name} is the hidden identity of {character.biography["full-name"]}. {character.name} was born in {character.biography["place-of-birth"]}. {character.name} works with {character.connections["group-affiliation"]}.
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
            
    )
    
}


export default CardTest;