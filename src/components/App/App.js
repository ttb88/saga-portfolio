import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import ProjectPage from '../ProjectPage/ProjectPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'Comfortaa',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: '12',
  },
});

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    
    return (
      <Router>
      <MuiThemeProvider theme={theme}>
      <div>
        <Route exact path="/" component={ProjectPage} />
      </div>
      </MuiThemeProvider>
    </Router>
    );
  }
}

export default App;
