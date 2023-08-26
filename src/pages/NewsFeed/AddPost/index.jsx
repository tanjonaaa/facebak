import {BiSmile} from "react-icons/bi";
import {useState} from "react";
import {createPortal} from "react-dom";
import AddPostModal from "../../../components/AddPostModal";

const AddPost = () => {
    const [portal,setPortal] = useState(false);
    const handleAddPost = () => {
        setPortal(prev => !prev);
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
                        <AddPostModal/>,
                        document.getElementById("portal-comment")
                    )
                )
            }
        </>

    )
}


export default AddPost;