import axios from "axios";
const host = "http://localhost:8080"; // default on local

const getReaction = async (postUuid) => {
    return (await axios.get(
        `${host}/posts/${postUuid}/reactions`,
    )).data
}

const sendReactionToPost = async (postUuid,data) => {
    return (await axios.post(
        `${host}/posts/${postUuid}/reactions`,
        data,
    )).data;
}

const deleteAReaction = async (postUuid,data) => {
    return (await axios.delete(
        `${host}/posts/${postUuid}/reactions`,
        {data: data}
    )).data
}

export {
    getReaction,
    sendReactionToPost,
    deleteAReaction
}


