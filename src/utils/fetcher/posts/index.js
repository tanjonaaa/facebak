import {getRequest, postRequest, putRequest} from "../methods";
import axios from "axios";

const host = 'http://localhost:8080';
export const getPosts = async () => {
    return await getRequest(`${host}/posts`)
}

export const getPostById = async (uuid) => {
    return await getRequest(`${host}/posts/${uuid}`);
}

export const createPostOrUpdate = async (post) => {
    return await putRequest(`${host}/posts`, post);
}

export const postComment = async (postId,content,userId) => {
    return await putRequest( `${host}/posts/${postId}/comments`, {content: content, userId: userId, postId: postId} );
}

export const getCommentById = async (postId) => {
    return getRequest(`${host}/posts/${postId}/comments` );
}