import React, { Component } from 'react';
import axios from 'axios';
import {
    reviewsContainer,
    text,
    contentText,
    item,
    loadingReviews,
} from './Reviews.module.css';

class Reviews extends Component {
    state = { reviews: [], isLoading: false };
    async componentDidMount() {
        this.setState({ isLoading: true });
        const { movieId } = this.props.match.params;
        const key = 'ace0f6585130b92065e469ed2fee0a01';
        const url = 'https://api.themoviedb.org/3';
        const response = await axios.get(
            `${url}/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
        );
        this.setState({
            reviews: [...response.data.results],
            isLoading: false,
        });
    }
    render() {
        console.log(this.state.reviews);
        const { reviews, isLoading } = this.state;
        return (
            <>
                <div className={reviewsContainer}>
                    {isLoading && (
                        <p className={loadingReviews}>Load reviews...</p>
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
