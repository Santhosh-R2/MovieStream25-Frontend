import axios from 'axios'
import { baseUrl } from './Constance';


const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance;