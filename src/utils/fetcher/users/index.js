import {getRequest, postRequest, putRequest} from "../methods";

const host = 'http://localhost:8080';

export const getAllUsers = async () => {
    return await getRequest(`${host}/users`);
}

export const getUserById = async (userUuid) => {
    return getRequest(`${host}/users/${userUuid}`);
}

export const createUser = async (form) => {
    return postRequest(`${host}/users`, form);
}

export const updateUser = async (email,newData) => {
    return putRequest(`${host}/users`, {...newData, email});
}
