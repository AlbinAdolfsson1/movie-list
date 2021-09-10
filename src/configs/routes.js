import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from '../pages/index';
import MovieList from '../pages/MovieList';
import Movie from '../pages/Movie';
import SearchedMovies from '../pages/SearchedMovies';

export const routes = [
    {
        path: '/',
        component: IndexPage,
        exact: true,
    },
    {
        path: '/upcoming',
        label: 'Upcoming',
        component: () => <MovieList listType="upcoming" />,
    },
    {
        path: '/popular',
        label: 'Popular',
        component: () => <MovieList listType="popular" />,
    },
    {
        path: '/topMovies',
        label: 'Top Movies',
        component: () => <MovieList listType="top_rated" />,
    },
    {
        path: '/movie/:movie',
        component: Movie,
    },
    {
        path: '/search/:search',
        component: SearchedMovies,
    },
]

export default function RouteConfig() {
    return (
        <Router>
            <Switch>
                {routes.map((route, i ) => {
                    const Component = route.component
                    return (
                        <Route 
                            path={route.path}
                            exact={route.exact}
                            render={props => <Component {...props} />}
                        />
                    )
                })}
            </Switch>
        </Router>
    )
    
}