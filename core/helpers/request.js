import axios from 'axios';

const connectTimeout = process.env.API_CONNECT_TIMEOUT || 10000;
const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:4000/api';

axios.defaults.timeout = connectTimeout;

export const request = ({
  method = 'POST',
  url = '',
  data = null,
  contentType = 'application/json',
  baseURL = apiBaseUrl,
}) => {
  const options = {
    method, baseURL, url, headers: { 'content-type': contentType },
  };

  const token = localStorage.getItem('token');
  if (token) options.headers.Authorization = `Bearer ${token}`;

  if (data && method === 'GET') {
    options.params = data;
  } else if (data) {
    options.data = data;
  }

  const errorHandler = (axiosError) => {
    const error = { status: 0, message: '', data };
    if (axiosError.response) {
      error.data = axiosError.response.data || null;
      error.status = axiosError.response.status;
      if (error.status < 500) {
        error.message = axiosError.response.data.message;
      }
    } else {
      error.status = 600;
    }
    return error;
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then((response) => resolve(response.data))
      .catch((error) => reject(errorHandler(error)));
  });
};
