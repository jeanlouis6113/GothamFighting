import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Logo from './components/Logo';
import Carrousel from './components/Carrousel'
import ButtonBio from './components/ButtonBio';
import ButtonPlay from './components/ButtonPlay';
import ButtonSettings from './components/ButtonSettings';
import PageBio from './components/PageBio';
import PageCombat from './components/PageCombat';
import Music from './components/Music';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Carrousel />
      <ButtonBio />
      <ButtonPlay />
      <Music/>
      <ButtonSettings />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/PageBio" component={PageBio} />
        <Route path="/PageCombat" component={PageCombat} />
      </Switch>
    </div>
  );
}

export default App;
