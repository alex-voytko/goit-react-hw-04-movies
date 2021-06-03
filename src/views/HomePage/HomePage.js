import React, { Component } from 'react';
import { title } from './HomePage.module.css';
import MoviesList from '../../components/MoviesList';
// import moviesApi from '../../services/movies-api';
import axios from 'axios';

class HomePage extends Component {
    state = {
        trendMovies: [],
    };
    componentDidMount() {
        const key = 'ace0f6585130b92065e469ed2fee0a01';
        const url = 'https://api.themoviedb.org/3';
        axios
            .get(`${url}/trending/movie/week?api_key=${key}`)
            .then(response =>
                this.setState({ trendMovies: response.data.results }),
            );
    }
    render() {
        const { trendMovies } = this.state;
        return (
            <>
                <h1 className={title}>Week Trends</h1>
                <MoviesList movies={trendMovies} />
            </>
        );
    }
}

export default HomePage;
