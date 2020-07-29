import React from 'react';
import Login from './containers/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import SignUp from './containers/SignUp';
import Complaints from './containers/Complaints';

function App() {
  return (
    <Router>
      <a href="/login">Login</a>
      <a href="/signup">Signup</a>
      <div className="App">
        <p style={{ fontSize: 36 }}>Complaints Portal</p>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/complaints" component={Complaints} />
      </div>
    </Router >
  );
}

export default App;
