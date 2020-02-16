import axios from 'axios';

const api = axios.create({
    baseURL: 'http://n-b490-iago:3333',
});

export default api;