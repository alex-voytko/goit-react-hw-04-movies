import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import Navigation from './components/Navigation';
import Header from './components/Header';
import routes from './views/routes';
import Spinner from './components/Loader';

const HomePage = lazy(() =>
    import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
    import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
    import(
        './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
    ),
);

const App = () => (
    <>
        <Header>
            <Navigation />
        </Header>
        <Container>
            <Suspense fallback={<Spinner size="60" />}>
                <Switch>
                    <Route exact path={routes.home} component={HomePage} />
                    <Route exact path={routes.movies} component={MoviesPage} />
                    <Route
                        path={`${routes.movieCard}`}
                        component={MovieDetailsPage}
                    />
                    <Route component={HomePage} />
                </Switch>
            </Suspense>
        </Container>
    </>
);

export default App;
