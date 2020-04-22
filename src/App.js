import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Logo from './components/Logo'
import ButtonBio from './components/ButtonBio'
import ButtonPlay from './components/ButtonPlay'
import PageBio from './components/PageBio'
import PageCombat from './components/PageCombat'
import Carrousel from './components/Carrousel'
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route exact path="/" component={Carrousel}/>
        <Route exact path="/PageBio" component={PageBio} />
        <Route path="/PageCombat" component={PageCombat} />
      </Switch>
      <ButtonBio />
      <ButtonPlay />
    </div>
    
  );
}

export default App;
