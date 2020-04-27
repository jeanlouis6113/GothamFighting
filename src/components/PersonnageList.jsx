import React from 'react';
import { Link } from 'react-router-dom';
import characters from './characters.json';
import CardTest from './CardTest';
import { Grid } from '@material-ui/core';


function PersonnageList(props) {
  return (
    <div className="CharacterList">
      <Grid container direction="row" justify="center" wrap="wrap" spacing={2}>
          {characters.map(character => (
          <Grid item sm={11} md={5} lg={4} key={characters.id} className="Character">
              <Link to={`/PageBio/characters/${character.id}`}>
                  <CardTest key={characters.id}/>
              </Link>
          </Grid>
        ))}
      </Grid>
      
      
    </div>
  );
}

export default PersonnageList;
