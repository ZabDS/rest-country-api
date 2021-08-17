import React from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import {darkMode,lightMode} from './theme'
import AppWrapper from './components/AppWrapper'
import Navbar from './components/navbar'

import MainPage from './components/MainPage'
import CountryDetails from './components/CountryDetails'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {useState} from 'react'

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightMode)
  const changeThemeHandler = () => {
    currentTheme===lightMode?setCurrentTheme(darkMode):setCurrentTheme(lightMode);
  }
  
  const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${currentTheme.backgroundColor};
    }
  `
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle/>
      <AppWrapper>
        <Navbar>
          <Navbar.Label>Where in the world?</Navbar.Label>
          <Navbar.Button onClick={changeThemeHandler}>
            {currentTheme===lightMode?
            <><i className="fas fa-moon"></i> Dark Mode</>:<><i className="fas fa-sun"></i> Light Mode</>}
          </Navbar.Button>
        </Navbar>
        
        <Router>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/country/:code" component={CountryDetails}/>
        </Router>        
        
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
