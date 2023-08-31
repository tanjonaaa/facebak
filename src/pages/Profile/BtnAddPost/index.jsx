import {BsFillPostcardFill} from "react-icons/bs";
import {useContext, useState} from "react";
import {createPortal} from "react-dom";
import AddPostModal from "../../../components/AddPostModal";
import {clientContext} from "../../../utils/context";

const BtnAddPost = () => {
    const {userId} = useContext(clientContext);
    const [portal,setPortal] = useState(false);
    const handleOpenAddPostModal = () => {
        setPortal(prev => !prev);
    }

    const handleClose = () => {
        setPortal(false);
    }

    const handleAddedPost = () => {
        setPortal(false);
    }

    return (
        <>
            <button className="text-white rounded-md bg-orange-500 py-1 px-2 flex items-center gap-2 hover:bg-orange-400"
                    onClick={handleOpenAddPostModal}>
                <BsFillPostcardFill/>
                <span className="font-semibold">Add post</span>
            </button>
            {
                portal && (
                    createPortal(
                        <AddPostModal onCancel={handleClose}
                                      onAddedPost={handleAddedPost}
                                      userId={userId}/>,
                        document.getElementById("post-page")
                    )
                )
            }
        </>

    )
}

export default BtnAddPost;