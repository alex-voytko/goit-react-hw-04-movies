import axios from 'axios';

const showTrends = ({ url, key }) => {
    axios
        .get(`${url}/trending/movie/week?api_key=${key}`)
        .then(response => response.data.results);
};

export default { showTrends };
