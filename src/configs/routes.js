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
        component: () => <MovieList categorieType="upcoming" />,
    },
    {
        path: '/popular',
        label: 'Popular',
        component: () => <MovieList categorieType="popular" />,
    },
    {
        path: '/topMovies',
        label: 'Top Movies',
        component: () => <MovieList categorieType="top_rated" />,
    },
    {
        path: '/home/:listType/:movie',
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
                            key={route.path} 
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