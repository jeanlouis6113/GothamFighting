import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PageBio from './components/PageBio';
import PageCombat from './components/PageCombat';
import PageHome from './components/PageHome';
import Video from './components/Video';

import PersonnageDetails from './components/PersonnageDetails'
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      character: {
        response: '',
        id: '',
        name: '',
        powerstats: '',
        biography: '',
        appearance: '',
        work: '',
        connections : '',
        image: ''
      }
    }
  }
//origine du bug
  updateCharacter = (character) => {
    this.setState({character: character});
  };

  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={PageHome}/>
            <Route exact path="/PageBio" component={() => <PageBio character={this.state.character} />}/>
            <Route path="/PageCombat" component={PageCombat} />
            <Route path="/PageBio/characters/:characterId" component={() => <PersonnageDetails updateCharacter={this.updateCharacter} />} />
        </Switch>
        <Grid container item xs={5}>
          <Video />
        </Grid>

      </div>
    );
  }
}

export default App;
