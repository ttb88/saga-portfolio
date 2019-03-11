import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import ProjectPage from '../ProjectPage/ProjectPage';
import Admin from '../Admin/Admin';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00887a',
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
    fontFamily: [
      '-apple-system',
      'Comfortaa',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: '13',
    useNextVariants: true,
  },
});

class App extends Component {
  render() {

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            <Route exact path="/" component={ProjectPage} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
