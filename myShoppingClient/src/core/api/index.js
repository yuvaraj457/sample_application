import axios from 'axios';

import { apiTarget } from '../../config.json';


const axiosInstance = axios.create({
    baseURL: apiTarget,
});

export default axiosInstance;



