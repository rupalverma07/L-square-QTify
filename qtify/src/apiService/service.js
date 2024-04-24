import axios from 'axios';

export const getTopAlbumData = async() =>{
    const data = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
    return data;
}