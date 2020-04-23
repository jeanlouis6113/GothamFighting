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
import PageHome from './components/PageHome';
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
      <Grid container item xs={1}>
                        <Logo />
                    </Grid>
        <Switch>
            <Route exact path="/" component={PageHome}/>
            <Route exact path="/PageBio" component={PageBio} />
            <Route path="/PageCombat" component={PageCombat} />
        </Switch>

       {/* <Grid container justify="flex-end">
                        <ButtonSettings />              
                    </Grid> 
  */}
    </div>
  );
}

export default App;
