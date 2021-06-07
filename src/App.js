import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import Navigation from './components/Navigation';
import Header from './components/Header';
import routes from './views/routes';
import Loader from 'react-loader-spinner';
import { loader } from './Loader.module.css';

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
            <Suspense
                fallback={
                    <div className={loader}>
                        <Loader
                            type="Oval"
                            color="#FFFFFF"
                            height={50}
                            width={50}
                        />
                    </div>
                }
            >
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
