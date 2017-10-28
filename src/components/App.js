/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

import ContactPage from '../containers/ContactPage';
import ListSpacePage from '../containers/ListSpacePage';
import UserAccountPage from '../containers/UserAccountPage';
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
          <NavLink to="/list" activeStyle={activeStyle}>List Space</NavLink>
          {' | '}
          <NavLink to="/inbox" activeStyle={activeStyle}>Inbox</NavLink>
          {' | '}
          <NavLink to="/help" activeStyle={activeStyle}>Help</NavLink>
          {' | '}
          <NavLink to="/profile" activeStyle={activeStyle}>Profile</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/list" component={ListSpacePage} />
          <Route path="/inbox" component={Messaging} />
          <Route path="/help" component={ContactPage} />
          <Route path="/profile" component={UserAccountPage} />
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
