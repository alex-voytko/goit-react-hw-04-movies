import React, { Component } from 'react';
import axios from 'axios';
import {
    title,
    text,
    navList,
    imageContainer,
    movieContainer,
    textContainer,
    contentText,
    descriptionList,
    genreItem,
    activeText,
} from './MovieDetailsPage.module.css';
import { Route, NavLink } from 'react-router-dom';
import routes from '../routes';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';

class MovieDetailsPage extends Component {
    state = {
        original_title: '',
        genres: [],
        overview: '',
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
    render() {
        const { original_title, genres, overview, poster_path } = this.state;
        return (
            <>
                <div className={movieContainer}>
                    <div className={imageContainer}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                            alt={'movie-poster'}
                        />
                    </div>
                    <div className={textContainer}>
                        <h2 className={title}>{original_title}</h2>
                        <ul className={descriptionList}>
                            <li>
                                <p className={text}>Genres:</p>

                                {genres.map(genre => (
                                    <p className={genreItem}>{genre.name} </p>
                                ))}
                            </li>
                            <li>
                                <p className={text}>Description:</p>
                                <p className={contentText}>{overview}</p>
                            </li>
                        </ul>
                        <ul className={navList}>
                            <li>
                                <NavLink
                                    to={`${this.props.match.url}${routes.cast}`}
                                    className={text}
                                    activeClassName={activeText}
                                >
                                    Cast
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`${this.props.match.url}${routes.reviews}`}
                                    className={text}
                                    activeClassName={activeText}
                                >
                                    Reviews
                                </NavLink>
                            </li>
                        </ul>
                        <Route
                            path={`${this.props.match.path}${routes.cast}`}
                            component={Cast}
                        />
                        <Route
                            path={`${this.props.match.path}${routes.reviews}`}
                            component={Reviews}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default MovieDetailsPage;
