import {BsFillPostcardFill} from "react-icons/bs";
import {useState} from "react";
import {createPortal} from "react-dom";
import AddPostModal from "../../../components/AddPostModal";

const BtnAddPost = () => {
    const [portal,setPortal] = useState(false);
    const handleOpenAddPostModal = () => {
        setPortal(prev => !prev);
    }
    return (
        <button className="text-white rounded-md bg-orange-500 py-1 px-2 flex items-center gap-2 hover:bg-orange-400"
                onClick={handleOpenAddPostModal}>
            <BsFillPostcardFill/>
            <span className="font-semibold">Add post</span>
            {
                portal && (
                    createPortal(
                        <AddPostModal/>,
                        document.getElementById("post-page")
                    )
                )
            }
        </button>
    )
}

export default BtnAddPost;