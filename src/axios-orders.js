import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-1f34c.firebaseio.com/'
});

export default instance;