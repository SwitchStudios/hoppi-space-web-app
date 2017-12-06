import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import About from './components/About/About';
import SearchResultsContainer from './containers/SearchResultsContainer';
import ListSpaceContainer from './containers/ListSpaceContainer';
import SupportPage from './components/_Common/SupportPage';
import UserProfilePage from './components/UserProfile/UserProfilePage';
import MessageInboxPage from './components/Messaging/MessageInboxPage';

export default (
    <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/about" component={About}/>
        <Route path="/search" component={SearchResultsContainer}/>
        <Route path="/list" component={ListSpaceContainer}/>
        <Route path="/messaging" component={MessageInboxPage}/>
        <Route path="/profile" component={UserProfilePage}/>
        <Route path="/support" component={SupportPage}/>
    </Switch>
);
