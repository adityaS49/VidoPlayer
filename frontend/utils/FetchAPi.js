import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const token = "1207dfec21msh8999936bd805b45p1ab34cjsnf5f067e25f8c"
const options = {
  method: 'GET',
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': token,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
