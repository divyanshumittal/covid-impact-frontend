import axios from 'axios';
import * as config from 'config';

const baseURL = `${config.apiUrl}/blocks`;

const getAllBlocks = async () => {
    const response = await axios.get(`${baseURL}`);
    return response.data;
};

export default {
    getAllBlocks
};
