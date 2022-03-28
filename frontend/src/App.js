import React from 'react';
import './App.css';
import themeOptions from './Theme.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Civilization from './components/Civilizations';
import Navbar from './components/Navbar';
import CivilizationShow from './components/CivilizationShow'
import Footer from './components/Footer'

const theme = createTheme(themeOptions);

function App() {

  return (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Civilization} />
        <Route exact path='/civilization/:id' component={CivilizationShow} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
