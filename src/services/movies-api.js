import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const key = 'api_key=ace0f6585130b92065e469ed2fee0a01';
const lang = 'language=en-US';
const stuff = 'page=1&include_adult=false';

const showWeekTrends = () => {
    return axios
        .get(`${url}/trending/movie/week?${key}`)
        .then(response => response.data.results);
};

const searchMovies = searchQuery => {
    return axios
        .get(`${url}/search/movie?${key}&${lang}&query=${searchQuery}&${stuff}`)
        .then(response => response.data.results);
};

const fetchMovieDetails = movieId => {
    return axios
        .get(`${url}/movie/${movieId}?${key}&${lang}`)
        .then(response => response.data);
};

const loadMovieCast = movieId => {
    return axios
        .get(`${url}/movie/${movieId}/credits?${key}&${lang}`)
        .then(response => response.data.cast);
};

const loadMovieReviews = movieId => {
    return axios
        .get(`${url}/movie/${movieId}/reviews?${key}&${lang}&page=1`)
        .then(response => response.data.results);
};

export default {
    showWeekTrends,
    searchMovies,
    fetchMovieDetails,
    loadMovieCast,
    loadMovieReviews,
};
