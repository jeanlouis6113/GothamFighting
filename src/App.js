import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Logo from './components/Logo'
import ButtonBio from './components/ButtonBio'
import ButtonPlay from './components/ButtonPlay'
import PageBio from './components/PageBio'
import PageCombat from './components/PageCombat'
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <ButtonBio />
      <ButtonPlay />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/PageBio" component={PageBio} />
        <Route path="/PageCombat" component={PageCombat} />
      </Switch>
    </div>
    
  );
}

export default App;
