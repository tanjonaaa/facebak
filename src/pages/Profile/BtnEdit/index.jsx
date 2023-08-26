import {BiEdit} from "react-icons/bi";
import {createPortal} from "react-dom";
import ModalEditProfile from "../ModalEditProfile";
import {useState} from "react";

const BtnEdit = () => {
    const [open,setOpen] = useState(false);
    const handleClick = () => {
        setOpen(prev => !prev );
    }

    return (
        <>
            <button className="text-white rounded-md bg-blue-500 py-1 px-2 flex
                items-center gap-2 hover:bg-blue-400"
                    onClick={handleClick}>
                <BiEdit/>
                <span className="font-semibold">Edit profile</span>
            </button>
            {
                open && createPortal(
                    <ModalEditProfile/>,
                    document.getElementById("post-page")
                )
            }
        </>
    )
}

export default BtnEdit;