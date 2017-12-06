import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';

export default (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
    </Switch>
);
