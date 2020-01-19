import axios from 'axios';

const api = axios.create({
  baseURL: "https://afcd4c4b.ngrok.io",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default api;