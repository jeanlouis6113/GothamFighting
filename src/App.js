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
                {/* <Route exact path="/ButtonBio" component={ButtonBio} />
                <Route exact path="/ButtonPlay" component={ButtonPlay}  /> */}
               
            </Switch>
    </div>
  );
}

export default App;
