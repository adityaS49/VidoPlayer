import axios from 'axios';
import { api_token } from './Constants';
require('dotenv').config()
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

console.log(api_token);
const options = {
  method: 'GET',
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': api_token,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
