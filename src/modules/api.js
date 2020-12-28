import axios from 'axios';
axios.defaults.withCredentials = true;

export const imgurl = "http://10.156.147.146";
export const url = "http://10.156.147.146";

export const registerapi = (registeruser) => {
    const result = axios.post(url + "/signup", registeruser)
    return result;
}

export const loginapi = async (loginuser) => {
    return ( await axios.post(url + "/login", loginuser) );
     
}