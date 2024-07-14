import axios from 'axios'
import {WEATHER_API_KEY,BASE_URL_WEATHER} from '@env'

const Helper = async ({ endpoint, query, body, method }) => {
    const url = `${BASE_URL_WEATHER}${endpoint}`;

    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let res;

    try {
        switch (method) {
            case 'GET':
                res = await axios.get(url, {
                    params: {
                        q: query.city,
                        appid: WEATHER_API_KEY,
                        units: 'metric' // Added units parameter directly here
                    },
                    ...options
                });
                break;

            case 'POST':
                res= await axios.post(url,{
                    body,
                    ...options
                });
                break;
            default:
                throw new Error('Unsupported HTTP method');
        }

        const data = res.data;
        return {
            status: res.status,
            data
        };
    } catch (error) {
        console.error('API call error:', error);
        throw error; // Re-throw the error after logging it
    }
};

export default Helper;