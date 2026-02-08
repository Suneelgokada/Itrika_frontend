  // import axios from 'axios';

  // // Create axios instance with base configuration
  // const API = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  //   timeout: 10000,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // // Request interceptor - automatically adds auth token to all requests
  // API.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem('adminToken');
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  // // Response interceptor - handles common errors
  // API.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     // Handle 401 Unauthorized - redirect to login
  //     if (error.response?.status === 401) {
  //       localStorage.removeItem('adminToken');
  //       window.location.href = '/login';
  //     }
      
  //     // Handle 403 Forbidden
  //     if (error.response?.status === 403) {
  //       console.error('Access denied');
  //     }
      
  //     return Promise.reject(error);
  //   }
  // );

  // export default API;



  import axios from "axios";

  const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  API.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("adminToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  API.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  export default API;
