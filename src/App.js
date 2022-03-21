import React from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import HomeGame from './pages/HomeGame';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/homegame" component={ HomeGame } />
            <Route path="/settings" component={ Settings } />
            <Route path="/feedback" component={ Feedback } />
            <Route path="/ranking" component={ Ranking } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
