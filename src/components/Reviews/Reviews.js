import React, { Component } from 'react';
import {
    reviewsContainer,
    text,
    contentText,
    item,
    loadingReviews,
} from './Reviews.module.css';
import MoviesAPI from '../../services/movies-api';
import Loader from 'react-loader-spinner';
import { loader } from '../../Loader.module.css';

class Reviews extends Component {
    state = { reviews: [], isLoading: false, error: null };
    componentDidMount() {
        this.setState({ isLoading: true });
        const { movieId } = this.props.match.params;
        MoviesAPI.loadMovieReviews(movieId)
            .then(response => this.setState({ reviews: [...response] }))
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({ isLoading: false }));
    }
    render() {
        console.log(this.state.reviews);
        const { reviews, isLoading } = this.state;
        return (
            <>
                <div className={reviewsContainer}>
                    {isLoading && (
                        <div className={loader}>
                            <Loader
                                type="Oval"
                                color="#FFFFFF"
                                height={32}
                                width={32}
                            />
                        </div>
                    )}
                    {!isLoading && (
                        <ul>
                            {reviews.map(review => (
                                <li key={review.id} className={item}>
                                    <p className={text}>{review.author}:</p>
                                    <p className={contentText}>
                                        {review.content}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                    {!isLoading && !reviews.length && (
                        <p className={loadingReviews}>
                            There are no reviews yet
                        </p>
                    )}
                </div>
            </>
        );
    }
}
export default Reviews;
