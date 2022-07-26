import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        
            <Link to="/login">Login</Link>
          
            <Link to="/friends">Friends List</Link>
          
            <Link to="/friends/add">Add Friend</Link>

            <Link to="/logout">Logout</Link>
          
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <PrivateRoute exact path="/friends/add" component={AddFriend} />
          <PrivateRoute exact path="/logout" component={Logout} />
        </Switch>
        {/* <Route exact path="/">
          <Login/>
        </Route>

        <Route exact path="/login">
          <Redirect to="/"/>
        </Route>

        <Route exact path="/friends">
          <FriendsList/>
        </Route>

        <Route exact path="/friends/add">
          <AddFriend/>
        </Route> */}
      </div>
    </Router>
    
  );
}

export default App;
