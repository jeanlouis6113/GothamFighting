import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Logo from './components/Logo'

import './App.css';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Switch>
                <Route exact path="/Logo" component={Logo} />
               
            </Switch>
    </div>
  );
}

export default App;
