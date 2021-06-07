import React from 'react';
import {
    genreItem,
    text,
    contentText,
    descriptionList,
} from './MovieDetails.module.css';
import PropTypes from 'prop-types';

const MovieDetails = ({ popularity, release, genres, description }) => {
    return (
        <>
            <ul className={descriptionList}>
                <li>
                    <p className={text}>Popularity:</p>
                    <p className={contentText}>{popularity}</p>
                </li>
                <li>
                    <p className={text}>Release:</p>
                    <p className={contentText}>{release}</p>
                </li>
                <li>
                    <p className={text}>Genres:</p>

                    {genres.map(({ id, name }) => (
                        <p key={id} className={genreItem}>
                            {name}
                        </p>
                    ))}
                </li>
                <li>
                    <p className={text}>Description:</p>
                    <p className={contentText}>{description}</p>
                </li>
            </ul>
        </>
    );
};

MovieDetails.propTypes = {
    popularity: PropTypes.number.isRequired,
    release: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object).isRequired,
    description: PropTypes.string.isRequired,
};

export default MovieDetails;
