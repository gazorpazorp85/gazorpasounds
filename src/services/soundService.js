import axios from 'axios';

const CLIENT_ID = 'ggX0UomnLs0VmW7qZnCzw';
const BASE_URL = `https://api.soundcloud.com/tracks/?client_id=${CLIENT_ID}`;

export default {
    getTracks,
    getNextPageTracks
}

async function getTracks(query) {
    try {
        const { data } = await axios.get(`${BASE_URL}&q=${query}&limit=6&linked_partitioning=1`);
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function getNextPageTracks(url) {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
        console.log(err);
    }
}