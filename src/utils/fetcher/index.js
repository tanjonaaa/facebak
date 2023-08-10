import axios from "axios";
const host = "http://localhost:8080"; // default on local

const getAllUsers = async () => {
    return await axios.get(
        host.concat('/users')
    );
}

const getUserById = async (userUuid) => {
    return await axios.get(
        host.concat("/users/",userUuid)
    );
}

const createUser = async (form) => {
    return await axios.post(
        host.concat("/users"),
        form
    );
}

const updateUser = async (email,newData) => {
    return await axios.put(
        host.concat("/users"),
        {...newData,email}
    );
}

const getReaction = async (postUuid) => {
    return await axios.get(
        host.concat("/posts/",postUuid,"/reactions")
    )
}

const sendReactionToPost = async (postUuid,data) => {
    return await axios.post(
        host.concat("/posts/",postUuid,"/reactions"),
        data
    );
}

const deleteAReaction = async (postUuid,data) => {
    return await axios.delete(
        host.concat("/posts/",postUuid,"/reactions"),
        data
    )
}

const getPosts = async () => {
    return await axios.get(
        host.concat("/posts")
    )
}

const getPostById = async (uuid) => {
    return await axios.get(
        host.concat("/posts/",uuid)
    );
}

const createPostOrUpdate = async (post) => {
    return await axios.post(
        host.concat("/posts"),
        post
    )
}

const postComment = async (postId,content) => {
    return await axios.post(host.concat("/posts/",postId,"/comments"),{postId,content});
}

const getCommentById = async (postId) => {
    return await axios.get(host.concat("posts/",postId,"/comments"));
}

export {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    getReaction,
    sendReactionToPost,
    deleteAReaction,
    getPosts,
    getPostById,
    createPostOrUpdate,
    postComment,
    getCommentById
}