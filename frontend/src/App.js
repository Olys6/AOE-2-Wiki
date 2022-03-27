import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Civilization from './components/Civilizations';
import Navbar from './components/Navbar';
import CivilizationShow from './components/CivilizationShow'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/civilizations' component={Civilization} />
        <Route exact path='/civilization/:id' component={CivilizationShow} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
