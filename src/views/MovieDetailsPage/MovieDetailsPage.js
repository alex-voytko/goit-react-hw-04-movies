import React, { Component } from 'react';
import axios from 'axios';

class MovieDetailsPage extends Component {
    state = {};
    async componentDidMount() {
        const { movieId } = this.props.match.params;
        console.log(this.props.match.params.movieId);
        const key = 'ace0f6585130b92065e469ed2fee0a01';
        const url = 'https://api.themoviedb.org/3';
        const response = await axios.get(
            `${url}/movie/${movieId}?api_key=${key}&language=en-US`,
        );
        console.log(response.data);
    }
    render() {
        return <h2>Movie Title {this.props.match.params.movieId}</h2>;
    }
}

export default MovieDetailsPage;
