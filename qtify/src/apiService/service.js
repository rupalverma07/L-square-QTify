import axios from 'axios';

export const getTopAlbumData = async() =>{
    const data = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
    return data;
}

export const getNewAlbumData = async() =>{
    const data = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
    return data;
}

export const getSongsData = async() =>{
    const data = await axios.get('https://qtify-backend-labs.crio.do/songs');
    return data;
}

export const getFiltersData = async() =>{
    const data = await axios.get('https://qtify-backend-labs.crio.do/genres');
    return data;
}