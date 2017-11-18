/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
// import SearchResultsPage from '../containers/SearchResultsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import SearchForm from './SearchForm';
import MessageInboxPage from './MessageInboxPage';
import SupportPage from './SupportPage';
import UserProfilePage from './UserProfile/UserProfilePage';
import AddSpacePage from './AddSpacePage';

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
          {'  |  '}
          <NavLink to="/search" activeStyle={activeStyle}>Find Space</NavLink>
          {'  |  '}
          <NavLink to="/list-space" activeStyle={activeStyle}>List Space</NavLink>
          {'  |  '}
          <NavLink to="/inbox" activeStyle={activeStyle}>Inbox</NavLink>
          {'  |  '}
          <NavLink to="/support" activeStyle={activeStyle}>Support</NavLink>
          {'  |  '}
          <NavLink to="/about" activeStyle={activeStyle}>About Us</NavLink>
          {'  |  '}
          <NavLink to="/profile" activeStyle={activeStyle}>My Profile</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchForm} />
          <Route path="/list-space" component={AddSpacePage} />
          <Route path="/inbox" component={MessageInboxPage} />
          <Route path="/support" component={SupportPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/profile" component={UserProfilePage} />
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
