import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'dc5075da36msh4a30547499324a6p1dd7e1jsn9d4be2334f7a',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};