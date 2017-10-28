/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

import SearchPage from './Search/SearchPage';
import Profile from './Account/Profile';
import Favorites from './Account/Favorites';
import Reservations from './Account/Reservations';
import LoggedOut from './Account/LoggedOut';
import SignUp from './Account/SignUp';
import Messaging from './Account/Messaging';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/favorites" activeStyle={activeStyle}>Favorites</NavLink>
          {' | '}
          <NavLink to="/profile" activeStyle={activeStyle}>Profile</NavLink>
          {' | '}
          <NavLink to="/reservations" activeStyle={activeStyle}>My Reservations</NavLink>
          {' | '}
          <NavLink to="/inbox" activeStyle={activeStyle}>Inbox</NavLink>
          {' | '}
          <NavLink to="/search" activeStyle={activeStyle}>Search Spaces</NavLink>
          {' | '}
          <NavLink to="/list" activeStyle={activeStyle}>List Space</NavLink>
          {' | '}
          <NavLink to="/logout" activeStyle={activeStyle}>Logout</NavLink>
          {' | '}
          <NavLink to="/signup" activeStyle={activeStyle}>LogIn / SignUp</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={SearchPage} />
          <Route path="/list" component={SearchPage} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/inbox" component={Messaging} />
          <Route path="/logout" component={LoggedOut} />
          <Route path="/signup" component={SignUp} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
