import React, {useState, useEffect} from 'react';
import { Route, Switch, } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PageBio from './components/PageBio';
import PageCombat from './components/PageCombat';
import PageHome from './components/PageHome';
import Video from './components/Video';
import characters from './components/characters.json';


import PersonnageDetails from './components/PersonnageDetails'
import './App.css';

function App() {
  const [persoOne, setPersoOne] = useState({
    id: '',
    name:'Select your champ',
    image:'/images/pointMystere.jpg'
  });
  const [persoTwo, setPersoTwo] = useState({
    id: '',
    name:'Select your champ',
    image:'/images/pointMystere.jpg'
  });

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
    <div className="App">
      <Switch>
          <Route exact path="/" component={PageHome}/>
          <Route exact path="/PageBio" component={() => <PageBio setPersoOne={setPersoOne} persoOne={persoOne} setPersoTwo={setPersoTwo} persoTwo={persoTwo} apiCharacters={apiCharacters} />} />
          <Route path="/PageCombat" component={() => <PageCombat idPersoOne={persoOne.id} idPersoTwo={persoTwo.id}/>} />
          <Route path="/PageBio/characters/:characterId" component={PersonnageDetails} /> 
      </Switch>
      <Grid container item xs={5}>
        <Video />
      </Grid>
    </div>
  );
}

export default App;
