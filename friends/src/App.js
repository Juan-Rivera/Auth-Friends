import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

import './App.css';


function App() {
  return (
      <Router>
        <div className='App'>
          <nav>
            <Link to='/login'>Login</Link>
            <Link to='/protected'>Friends List</Link>
          </nav>
          <Route path='/login' component={Login} />

          <PrivateRoute path='/protected' component={FriendsList} />
        </div>
      </Router>
      
  );
}

export default App;
