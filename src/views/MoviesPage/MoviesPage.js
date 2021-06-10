import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import MoviesList from '../../components/MoviesList';
import Button from '../../components/Button';
import { buttonReset } from '../../components/Button/Button.module.css';
import { title, titleContainer } from './MoviesPage.module.css';
import MoviesAPI from '../../services/movies-api';

class MoviesPage extends Component {
    state = { searchMovies: [], error: null, message: '' };

    componentDidMount() {
        const { location } = this.props;
        if (!location.search) {
            return;
        } else {
            this.searchMoviesByWord(location.search);
        }
    }
    handleSubmit = ({ searchQuery }) => {
        this.searchMoviesByWord(searchQuery);
        this.props.history.push({
            pathname: this.props.history.location.pathname,
            search: searchQuery,
            key: this.props.history.location.key,
        });
        this.setState({ searchQuery: '' });
        if (this.state.searchMovies.length) {
            this.setState({ message: '' });
        }
    };
    searchMoviesByWord = someWord => {
        MoviesAPI.searchMovies(someWord)
            .then(response =>
                this.setState({
                    searchMovies: response,
                }),
            )
            .catch(error => this.setState({ error: error }))
            .finally(
                () =>
                    !this.state.searchMovies.length &&
                    this.setState({
                        message: 'There are no films on this word =(',
                    }),
            );
    };
    reset = () => {
        this.setState({ searchMovies: [], message: '' });
    };

    render() {
        const { handleSubmit, reset } = this;
        const { searchMovies, message } = this.state;
        return (
            <>
                {!searchMovies.length && <SearchForm onSubmit={handleSubmit} />}
                {!searchMovies.length ? (
                    <div className={titleContainer}>
                        <h2 className={title}>{message}</h2>
                    </div>
                ) : (
                    <>
                        <Button
                            type="button"
                            onClick={reset}
                            title="Search other movies"
                            className={buttonReset}
                        />
                        <MoviesList movies={searchMovies} />
                    </>
                )}
            </>
        );
    }
}

export default MoviesPage;
