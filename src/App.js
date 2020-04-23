import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Logo from './components/Logo';
import Carrousel from './components/Carrousel'
import ButtonBio from './components/ButtonBio';
import ButtonPlay from './components/ButtonPlay';
import ButtonSettings from './components/ButtonSettings';
import PageBio from './components/PageBio';
import PageCombat from './components/PageCombat';
import Video from './components/Video';
import './App.css';

/*
Composant vidéo retiré en attente : 

          <Grid container direction="row" justify="center">
            <Grid item xs={0}>
              <Video/>
            </Grid>
          </Grid>

*/


function App() {
  return (
    <div className="App">
        <Grid container direction="column">
          <Grid container item xs={1}>
            <Logo />
          </Grid>
          
          <Grid container justify="center">
            <Grid item xs={9}>
              <Carrousel />
            </Grid>
          </Grid>
      
          <Grid container direction="row" justify="center">
            <Grid>
              <ButtonBio />
            </Grid>
            <Grid>
              <ButtonPlay />
            </Grid>
          </Grid>
          
          <Grid container justify="flex-end">
            <Grid item xs={1}>
              <ButtonSettings />
            </Grid>
          </Grid>
          
          
        </Grid>
        <Switch>
            <Route exact path="/" />
            <Route exact path="/PageBio" component={PageBio} />
            <Route path="/PageCombat" component={PageCombat} />
        </Switch>
    </div>
  );
}

export default App;
