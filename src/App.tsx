import React from 'react';
import { ThemeProvider } from 'styled-components';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';

import NewPage from './pages/New';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {

  const theme = {
    primary: "#2667ff",
    secondary: "#3f8efc",
    background: "#F0F0F5",
    text: "#6C6C80",
    white: "#fff"
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/new'><NewPage /></Route>

      </Switch>
      
      </BrowserRouter>
      <ToastContainer/>
    </ThemeProvider>
  );
}

export default App;
