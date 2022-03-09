import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import './App.css';
import logo from './trivia.png';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
          </Switch>
        </BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <p>
              SUA VEZ
            </p>
          </header>
        </div>
      </div>

    );
  }
}

export default App;
