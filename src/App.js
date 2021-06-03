import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import Navigation from './components/Navigation';
import Header from './components/Header';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import routes from './views/routes';
import MovieDetailsPage from './views/MovieDetailsPage';

class App extends Component {
    state = {
        searchValue: '',
    };
    render() {
        return (
            <>
                <Header>
                    <Navigation />
                </Header>
                <Container>
                    <Switch>
                        <Route exact path={routes.home} component={HomePage} />
                        <Route path={routes.movies} component={MoviesPage} />
                        <Route
                            path={`${routes.movies}${routes.movieId}`}
                            component={MovieDetailsPage}
                        />
                        {/* <Route component={HomePage} /> */}
                    </Switch>
                </Container>
            </>
        );
    }
}

export default App;
