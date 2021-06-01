import axios from 'axios';
// import routes from "../views/routes"

const fetchMovies = ({
    url = 'https://api.themoviedb.org/3',
    key = 'ace0f6585130b92065e469ed2fee0a01',
}) => {
    return axios.get(`${url}/movie/550?api_key=${key}`);
};

export default fetchMovies;
