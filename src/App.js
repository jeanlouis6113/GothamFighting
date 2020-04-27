import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Logo from './components/Logo';
import PageBio from './components/PageBio';
import PageCombat from './components/PageCombat';
import PageHome from './components/PageHome';
import Video from './components/Video';
import ButtonSettings from './components/ButtonSettings';
import './App.css';


function App() {
  return (
    <div className="App">
      <Grid container   justify="space-between">
        <Grid container item xs={1}>
          <Logo />
        </Grid>
        <Grid>
          <ButtonSettings />              
        </Grid>
      </Grid>

        <Switch>
            <Route exact path="/" component={PageHome}/>
            <Route exact path="/PageBio" component={PageBio} />
            <Route path="/PageCombat" component={PageCombat} />
        </Switch>
        <Grid container item xs={5}>
                        <Video />
                    </Grid>
 
    </div>
  );
}

export default App;
