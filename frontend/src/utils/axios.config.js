import axios from 'axios';

const { REACT_APP_HOST_BE } = process.env;
axios.defaults.baseURL = REACT_APP_HOST_BE;
