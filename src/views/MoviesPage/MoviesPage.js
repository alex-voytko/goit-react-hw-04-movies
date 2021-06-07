import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../../components/SearchForm';
import MoviesList from '../../components/MoviesList';
import Button from '../../components/Button';
import { buttonReset } from '../../components/Button/Button.module.css';

class MoviesPage extends Component {
    state = { searchMovies: [] };

    handleSubmit = ({ searchQuery }) => {
        const url = 'https://api.themoviedb.org/3';
        const key = 'ace0f6585130b92065e469ed2fee0a01';
        axios
            .get(
                `${url}/search/movie?api_key=${key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
            )
            .then(response => {
                this.setState({
                    searchMovies: response.data.results,
                });
            });
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
