import React, { Component } from 'react';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import Button from '../../components/Button';
import MovieDetails from '../../components/MovieDetails';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import {
    titleMovie,
    imageContainer,
    movieContainer,
    textContainer,
    navList,
    text,
    activeText,
} from './MovieDetailsPage.module.css';
import { backBtn } from '../../components/Button/Button.module.css';
import routes from '../routes';
import MoviesAPI from '../../services/movies-api';
import Loader from 'react-loader-spinner';
import { loader } from '../../Loader.module.css';

class MovieDetailsPage extends Component {
    state = {
        title: '',
        genres: [],
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        error: null,
        isLoading: false,
    };
    componentDidMount() {
        this.setState({ isLoading: true });
        const { movieId } = this.props.match.params;
        MoviesAPI.fetchMovieDetails(movieId)
            .then(response => this.setState({ ...response }))
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({ isLoading: false }));
    }
    saveHistory = () => {
        const { location, history } = this.props;
        history.push(location?.state?.from || routes.home);
    };
    render() {
        const {
            title,
            genres,
            overview,
            poster_path,
            popularity,
            release_date,
            isLoading,
        } = this.state;
        const { location, match } = this.props;
        console.log(match.url);
        return (
            <>
                <div className={movieContainer}>
                    {isLoading && (
                        <div className={loader}>
                            <Loader
                                type="Oval"
                                color="#FFFFFF"
                                height={40}
                                width={40}
                            />
                        </div>
                    )}
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
                        <h2 className={titleMovie}>{title}</h2>
                        <MovieDetails
                            popularity={popularity}
                            release={release_date}
                            genres={genres}
                            description={overview}
                        />
                        <ul className={navList}>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: `${match.url}/cast`,
                                        state: { from: location.state.from },
                                    }}
                                    className={text}
                                    activeClassName={activeText}
                                >
                                    Cast
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: `${match.url}/reviews`,
                                        state: { from: location.state.from },
                                    }}
                                    className={text}
                                    activeClassName={activeText}
                                >
                                    Reviews
                                </NavLink>
                            </li>
                        </ul>
                        <Switch>
                            <Route
                                path={`${match.path}/cast`}
                                component={Cast}
                            />
                            <Route
                                path={`${match.path}/reviews`}
                                component={Reviews}
                            />
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(MovieDetailsPage);
