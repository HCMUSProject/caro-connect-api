import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import GameContainer from './containers/GameContainer';
import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <div className='App'>
          <Route path='/login' component={LoginContainer} />
          <Route path='/register' component={RegisterContainer} />
          <Route path='/game' component={GameContainer} />
          <Route path='/' component={Home} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
