import axios from 'axios';
import queryString from  'query-string';
import apiconfig from './apiconfig';
const axiosClient=axios.create({
    baseURL:apiconfig.baseurl,
    Headers:{
'Content-type':'application/json'
    },
    paramsSerializer:params=>queryString.stringify({...params,api_key:apiconfig.apikey})
});
axiosClient.interceptors.request.use(async(config)=>config);
axiosClient.interceptors.response.use((response)=>{
    if(response && response.data){
        return response.data;
    }
    return response;
},(error)=>{
    throw error;
});
export default axiosClient;