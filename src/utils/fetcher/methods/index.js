import axios from "axios";

export const getRequest = async (url) => {
    return (await axios.get(url)).data;
}

export const postRequest = async (url, body) => {
    return (await axios.post(url, body)).data;
}

export const putRequest = async (url, body) => {
    return (await axios.put(url, body)).data;
}