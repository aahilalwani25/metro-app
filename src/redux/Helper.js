import axios from 'axios'
import {WEATHER_API_KEY,BASE_URL_WEATHER} from '@env'

const Helper= async({endpoint, id, query, token, method})=>{
    const url=`${BASE_URL_WEATHER}/${endpoint}`

    const options={
        headers:{
            'Content-Type':'application/json',
            //'Authorization':`Bearer ${token}`
        }
    }

    let res;

    switch(method){
        case 'GET':
            res= await axios.get(url,{
                params:{
                    city:query["city"],
                    appId: WEATHER_API_KEY
                }
            });
            break;
        default:
            throw new Error('Unsupported HTTP method');
            
    }

    const data= await res.data;
    return {
        status: res.status,
        data
    }
}

export default Helper;