import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;