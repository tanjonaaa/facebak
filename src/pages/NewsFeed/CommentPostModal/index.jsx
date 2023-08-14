import FormAddPost from "./formAddPost";
import {CgClose} from "react-icons/cg";
import style from "./index.module.css";
import CommentContent from "./commentContent";
import {useEffect, useState} from "react";
import {getCommentById} from "../../../utils/fetcher";
export default function CommentPostModal({children,onClose,parentProps}){
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const comments = await getCommentById(parentProps.data.id);

        setComments(comments);
    }

    useEffect(() => {
        fetchComments();
    }, [])

    const handleAddComment = () => {}

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>

            <div className={"bg-white p-1.5 rounded-lg z-10 flex flex-col gap-1 " + style.commentContainer}>
                <div className="w-full flex items-center justify-between">
                    <button className="text-blue-800" onClick={onClose}>
                        <CgClose className="w-5 h-5"/>
                    </button>

                    <div className="px-2 text-md font-medium text-zinc-400">{parentProps.user.username}</div>
                </div>

                <div className="h-full w-full overflow-x-hidden overflow-y-auto">
                    <div className="absolute w-full">
                        {/* copy of post here */}
                        Replace this text to copy of post component
                        {children}

                        {/* comment container */}
                        <hr className="h-0.5 bg-gray-300 border-0 my-2 mr-1.5"/>
                        <div className="w-full flex flex-col">
                            {
                                comments.length == 0 ? <p>Pas de commentaires</p> :
                                comments.map(v => (
                                    <CommentContent data={v}/>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <FormAddPost onAddComment={handleAddComment}/>
            </div>
        </div>
    );
}