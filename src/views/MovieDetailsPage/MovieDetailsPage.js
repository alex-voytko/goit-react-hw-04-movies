import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button';
import MovieDetails from '../../components/MovieDetails';
import NavButtons from '../../components/NavButtons';
import {
    title,
    imageContainer,
    movieContainer,
    textContainer,
} from './MovieDetailsPage.module.css';
import { backBtn } from '../../components/Button/Button.module.css';

class MovieDetailsPage extends Component {
    state = {
        original_title: '',
        genres: [],
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
    };
    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const key = 'ace0f6585130b92065e469ed2fee0a01';
        const url = 'https://api.themoviedb.org/3';
        const response = await axios.get(
            `${url}/movie/${movieId}?api_key=${key}&language=en-US`,
        );
        this.setState({ ...response.data });
    }
    saveHistory = () => {
        const { location, history } = this.props;
        history.push(location.state.from);
    };
    render() {
        const {
            original_title,
            genres,
            overview,
            poster_path,
            popularity,
            release_date,
        } = this.state;
        const { location } = this.props;
        console.log(location);
        return (
            <>
                <div className={movieContainer}>
                    <Button
                        onClick={this.saveHistory}
                        title=""
                        type="button"
                        className={backBtn}
                    />
                    <div className={imageContainer}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                            alt={'movie-poster'}
                        />
                    </div>
                    <div className={textContainer}>
                        <h2 className={title}>{original_title}</h2>
                        <MovieDetails
                            popularity={popularity}
                            release={release_date}
                            genres={genres}
                            description={overview}
                        />
                        <NavButtons
                            castURL={`${this.props.match.url}/cast`}
                            reviewsURL={`${this.props.match.url}/reviews`}
                            castPath={`${this.props.match.path}/cast`}
                            reviewsPath={`${this.props.match.path}/reviews`}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(MovieDetailsPage);
