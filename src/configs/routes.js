import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from '../pages/index';
import Upcoming from '../pages/Upcoming';
import Popular from '../pages/Popular';
import TopMovies from '../pages/TopMovies';

const routes = [
    {
        path: '/',
        component: IndexPage,
    },
    {
        path: '/upcoming',
        component: Upcoming,
    },
    {
        path: '/popular',
        component: Popular,
    },
    {
        path: '/topMovies',
        component: TopMovies,
    },
]

export default function RouteConfig() {
    return (
        <Router>
            <Switch>
                {routes.map((route, i ) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Router>
    )
    
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            render={props => <route.component {...props} routes={route.routes} />}
        />
    )
}