import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import characters from './characters.json';
import CardSelect from './CardSelect';
import { Grid } from '@material-ui/core';
import SelectedItemOne from './SelectedItemOne';
import SelectedItemTwo from './SelectedItemTwo';



function PersonnageList(props) {
  const [apiCharacters, setApiCharacters] = useState([]);

  async function fetchData() {
    for (let i = 0; i < characters.length; i++) {
      let url = `https://www.superheroapi.com/api.php/1109560066088421/${characters[i].id}`;
      const res = await fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status);
          } else {
            console.log("ok");
            return res.json();
          }
        })
        .then(
          (result) => {
            console.log("result: ", result);
            if (result.image.url !== undefined) {
              const character = {
                id: characters[i].id,
                urlImage: result.image.url,
                nameCharacter: result.name
              };
              setApiCharacters(oldArray => [...oldArray, character]);
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
    }
  }

  useEffect(() => {
    fetchData();
  },
    []
  );

  return (

    <div className="CharacterList">
      <Grid container direction="row" alignItems="center">
        <Grid item md={6} sm={12}>
          <SelectedItemOne />
        </Grid>
        <Grid item md={6} sm={12}>
          <SelectedItemTwo />
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" wrap="wrap" spacing={2}>
        {apiCharacters.map(character => (
          <Grid item sm={11} md={5} lg={4} key={character.id} className="Character">
            <Link to={`/PageBio/characters/${character.id}`}>
              <CardSelect key={character.id} {...character} />
            </Link>
            <Grid container justify="center">
              <Grid item xs={3} className="selectImage-One">
                <button className="playerButton">Player 1</button>
              </Grid>
              <Grid item xs={3} className="selectImage-Two">
                <button className="playerButton">Player 2</button>
              </Grid>
            </Grid>
          </Grid>



        ))}
      </Grid>


    </div>
  );
}

export default PersonnageList;
