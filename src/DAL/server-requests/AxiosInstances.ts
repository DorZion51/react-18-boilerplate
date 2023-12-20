import axios from 'axios';

// you will need to add .env with `REACT_APP_ENDPOINT` etc

export const backendServiceInstance = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT,
});

export const anotherServiceInstance = axios.create({
    baseURL: process.env.REACT_APP_ANOTHER_ENDPOINT,
});
