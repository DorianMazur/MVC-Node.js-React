// Omitted
import axios from './axios';

export const saveForm = data =>
  axios
    .put('saveForm', data)
    .then(res => res.data)
    .catch(error => ({ isError: true, message: error.response ? error.response.data.message : error.message }));
