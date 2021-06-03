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
// import MovieDetailsPage from '../../views/MovieDetailsPage'

const MoviesList = ({ movies, match }) => {
    return (
        <>
            <ul className={list}>
                {movies.map(({ id, original_title, poster_path }) => (
                    <li key={id} className={movieItem}>
                        <Link to={`${match.url}${id}`} className={movieLink}>
                            <div className={contentContainer}>
                                <div className={imageContainer}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
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

export default withRouter(MoviesList);
