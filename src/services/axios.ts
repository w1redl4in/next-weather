import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export default API;
