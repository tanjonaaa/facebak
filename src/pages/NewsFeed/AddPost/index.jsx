import {BiSmile} from "react-icons/bi";
import {useContext, useState} from "react";
import {createPortal} from "react-dom";
import AddPostModal from "../../../components/AddPostModal";
import {clientContext} from "../../../utils/context";

const AddPost = ({setPosts}) => {
    const {userId,userData} = useContext(clientContext);
    const [portal,setPortal] = useState(false);
    const handleAddPost = () => {
        setPortal(prev => !prev);
    }

    const handleCancel = () => {
        setPortal(false);
    }
    const handleAddedPost = form => {
        setPosts(prev => [{...form,user: userData},...prev]) // ensure to add all data
        setPortal(false);
    }

    return (
        <>
            <div className="flex gap-2 p-3 items-center select-none shadow-md m-2 rounded-md hover:shadow-lg transition"
                 onClick={handleAddPost}>
                <div className="w-9 h-9 bg-zinc-400 rounded-full flex-shrink-0"></div>
                <div className="p-2 w-full flex items-center bg-zinc-200 rounded-xl">
                    <span className="text-zinc-400">Add new post...</span>
                </div>
                <BiSmile className="flex-shrink-0 w-8 h-8 text-orange-400"/>
            </div>
            {
                portal && (
                    createPortal(
                        <AddPostModal onCancel={handleCancel}
                                      userId={userId}
                                      onAddedPost={handleAddedPost}/>,
                        document.getElementById("portal-comment")
                    )
                )
            }
        </>

    )
}


export default AddPost;