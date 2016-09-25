import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from '../containers/home';

const routes = () => {
    return <Router history={browserHistory}>
        <Route path="/" component={Home}>
        </Route>
    </Router>
}

export default routes;

