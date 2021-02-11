import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nodedeploy.solargames.com.br',
});

export default api;
