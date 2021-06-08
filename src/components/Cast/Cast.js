import React, { Component } from 'react';
import { contentText, tableContainer } from './Cast.module.css';
import MoviesAPI from '../../services/movies-api';
import Loader from 'react-loader-spinner';
import { loader } from '../../Loader.module.css';

class Cast extends Component {
    state = { actors: [], isLoading: false, error: null };
    componentDidMount() {
        this.setState({ isLoading: true });
        const { movieId } = this.props.match.params;
        MoviesAPI.loadMovieCast(movieId)
            .then(response => this.setState({ actors: response }))
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({ isLoading: false }));
    }
    render() {
        const { actors, isLoading } = this.state;
        return (
            <>
                <div className={tableContainer}>
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
                                            alt="actor"
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
