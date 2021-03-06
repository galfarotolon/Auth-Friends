import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from "./components/PrivateRoute"

function App() {




  return (
    <Router>
      <div className="App">
        <h1>Auth-Friends</h1>

        <div><Link to="/login">Login</Link></div>

        <div>   <Link to="/protected">Friends List</Link></div>



        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
        </Switch>



      </div>
    </Router>
  );
}

export default App;
