import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Civilization from './components/Civilizations';
import Navbar from './components/Navbar';
import CivilizationShow from './components/CivilizationShow'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/civilizations' component={Civilization} />
        <Route exact path='/civilization/:id' component={CivilizationShow} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
