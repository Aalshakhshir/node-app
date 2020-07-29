import React from 'react';
import Login from './containers/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import SignUp from './containers/SignUp';
import Complaints from './containers/Complaints';

function App() {
  return (
    <Router>
      <div className="App">
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        <p>Complaints Portal</p>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/complaints" component={Complaints} />
      </div>
    </Router>
  );
}

export default App;
