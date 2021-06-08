import React, { Component } from 'react';
import { title, homPageContainer } from './HomePage.module.css';
import MoviesList from '../../components/MoviesList';
import MoviesAPI from '../../services/movies-api';

class HomePage extends Component {
    state = {
        trendMovies: [],
        error: null,
    };
    componentDidMount() {
        MoviesAPI.showWeekTrends()
            .then(response => this.setState({ trendMovies: response }))
            .catch(error => this.setState({ error: error }));
    }
    render() {
        const { trendMovies } = this.state;
        console.log(trendMovies);
        return (
            <>
                <div className={homPageContainer}>
                    <h1 className={title}>Week Trends</h1>
                    <MoviesList movies={trendMovies} />
                </div>
            </>
        );
    }
}

export default HomePage;
