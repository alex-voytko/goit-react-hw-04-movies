import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import MoviesList from '../../components/MoviesList';
import Button from '../../components/Button';
import { buttonReset } from '../../components/Button/Button.module.css';
import MoviesAPI from '../../services/movies-api';

class MoviesPage extends Component {
    state = { searchMovies: [], error: null };

    handleSubmit = ({ searchQuery }) => {
        MoviesAPI.searchMovies(searchQuery)
            .then(response =>
                this.setState({
                    searchMovies: response,
                }),
            )
            .catch(error => this.setState({ error: error }));
    };
    reset = () => {
        this.setState({ searchMovies: [] });
    };

    render() {
        const { handleSubmit, reset } = this;
        const { searchMovies } = this.state;
        return (
            <>
                {!searchMovies.length && <SearchForm onSubmit={handleSubmit} />}
                {searchMovies.length >= 1 && (
                    <Button
                        type="button"
                        onClick={reset}
                        title="Search other movies"
                        className={buttonReset}
                    />
                )}

                <MoviesList movies={searchMovies} />
            </>
        );
    }
}

export default MoviesPage;
