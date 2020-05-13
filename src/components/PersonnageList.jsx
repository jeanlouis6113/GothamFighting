import React from 'react';
import { Link } from 'react-router-dom';
import CardSelect from './CardSelect';
import { Grid } from '@material-ui/core';
import SelectedItemOne from './SelectedItemOne';
import SelectedItemTwo from './SelectedItemTwo';
import ButtonPlay from './ButtonPlay';



function PersonnageList({ persoOne, setPersoOne, persoTwo, setPersoTwo, apiCharacters }) {

  function updatePlayerOne(idGiven, nameGiven, imageGiven) {
    setPersoOne({
      id: idGiven,
      name: nameGiven,
      image: imageGiven
    });
  }
  function updatePlayerTwo(idGiven, nameGiven, imageGiven) {
    setPersoTwo({
      id: idGiven,
      name: nameGiven,
      image: imageGiven
    });
  }

  return (

    <div className="CharacterList">
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item md={5} sm={12}>
          <SelectedItemOne {...persoOne} />
        </Grid>
        <Grid item md={2} sm={12}>
          <ButtonPlay id1={persoOne.id} id2={persoTwo.id} />
        </Grid>
        <Grid item md={5} sm={12}>
          <SelectedItemTwo {...persoTwo} />
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" wrap="wrap" spacing={2}>
        {apiCharacters.map(character => (
          <Grid container justify="center" sm={11} md={5} lg={4} key={character.id} className="Character">
            <Link to={`/PageBio/characters/${character.id}`}>
              <CardSelect key={character.id} {...character} />
            </Link>
            <Grid container justify="space-between" xs={5}>
              <Grid container justify="space-between">
                <Grid container xs={6} className="selectItem-One">
                  <p className="playerButton selectItem-One" onClick={() => updatePlayerOne(character.id, character.nameCharacter, character.urlImage)}>Player 1</p>
                </Grid>
                <Grid container justify="flex-end" xs={6} className="selectItem-Two">
                  <p className="playerButton selectItem-Two" onClick={() => updatePlayerTwo(character.id, character.nameCharacter, character.urlImage)} >Player 2</p>
                </Grid>
              </Grid>
            </Grid>

          </Grid>



        ))}
      </Grid>


    </div>
  );
}

export default PersonnageList;
