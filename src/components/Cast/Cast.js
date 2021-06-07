import React, { Component } from 'react';
import { contentText, tableContainer, loadingReviews } from './Cast.module.css';
import axios from 'axios';

class Cast extends Component {
    state = { actors: [], isLoading: false };
    async componentDidMount() {
        this.setState({ isLoading: true });
        const { movieId } = this.props.match.params;
        const key = 'ace0f6585130b92065e469ed2fee0a01';
        const url = 'https://api.themoviedb.org/3';
        const response = await axios.get(
            `${url}/movie/${movieId}/credits?api_key=${key}&language=en-US`,
        );
        this.setState({ actors: response.data.cast, isLoading: false });
    }
    render() {
        const { actors, isLoading } = this.state;
        console.log(actors);
        return (
            <>
                <div className={tableContainer}>
                    {isLoading && (
                        <p className={loadingReviews}>Load Actors...</p>
                    )}
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Actor</th>
                                <th>Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {actors.map(actor => (
                                <tr key={actor.id}>
                                    <td className={contentText}>
                                        {actors.indexOf(actor) + 1}
                                    </td>
                                    <td className={contentText}>
                                        {actor.name}
                                    </td>
                                    <td className={contentText}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                            alt="actor's photo"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default Cast;
