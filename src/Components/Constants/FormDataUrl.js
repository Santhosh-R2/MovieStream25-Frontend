import axios from "axios";

const axiosMultipartInstance = axios.create({

  // baseURL: "https://hybrid.srishticampus.in:4024/movie_streaming_api/",

  baseURL:  "http://localhost:4024/movie_streaming_api/",

  headers: {
    "Content-Type": "multipart/form-data", 
  },
});

export default axiosMultipartInstance;