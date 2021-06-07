import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    list,
    movieItem,
    movieLink,
    imageContainer,
    textContainer,
    contentContainer,
} from './MoviesList.module.css';
import routes from '../../views/routes';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
    return (
        <>
            <ul className={list}>
                {movies.map(({ id, original_title, poster_path }) => (
                    <li key={id} className={movieItem}>
                        <Link
                            to={{
                                pathname: `${routes.movies}${id}`,
                                state: {
                                    from: location,
                                },
                            }}
                            className={movieLink}
                        >
                            <div className={contentContainer}>
                                <div className={imageContainer}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                                        alt="movie-poster"
                                    />
                                </div>
                                <div className={textContainer}>
                                    {original_title}
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
