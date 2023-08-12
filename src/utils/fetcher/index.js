import axios from "axios";
const host = "http://localhost:8080"; // default on local

const getAllUsers = async () => {
    return (await axios.get(
        host.concat( '/users' )
    )).data;
}

const getUserById = async (userUuid) => {
    return (await axios.get(
        host.concat( "/users/", userUuid )
    )).data;
}

const createUser = async (form) => {
    return (await axios.post(
        host.concat( "/users" ),
        form
    )).data;
}

const updateUser = async (email,newData) => {
    return (await axios.put(
        host.concat( "/users" ),
        {...newData, email}
    )).data;
}

const getReaction = async (postUuid) => {
    return (await axios.get(
        host.concat( "/posts/", postUuid, "/reactions" )
    )).data
}

const sendReactionToPost = async (postUuid,data) => {
    return (await axios.post(
        host.concat( "/posts/", postUuid, "/reactions" ),
        data,
    )).data;
}

const deleteAReaction = async (postUuid,data) => {
    return (await axios.delete(
        host.concat( "/posts/", postUuid, "/reactions" ),
        data
    )).data
}

const getPosts = async () => {
    return (await axios.get(
        host.concat( "/posts" )
    )).data
}

const getPostById = async (uuid) => {
    return (await axios.get(
        host.concat( "/posts/", uuid )
    )).data;
}

const createPostOrUpdate = async (post) => {
    return (await axios.post(
        host.concat( "/posts" ),
        post,
    )).data
}

const postComment = async (postId,content) => {
    return (await axios.post( host.concat( "/posts/", postId, "/comments" ), {postId, content} )).data;
}

const getCommentById = async (postId) => {
    return (await axios.get( host.concat( "posts/", postId, "/comments" ) )).data;
}

export {
    getPosts,
    createUser,
    updateUser,
    getAllUsers,
    getUserById,
    getPostById,
    postComment,
    getReaction,
    getCommentById,
    deleteAReaction,
    createPostOrUpdate,
    sendReactionToPost,
}