import FormAddPost from "./formAddPost";
import {CgClose} from "react-icons/cg";
import style from "./index.module.css";
import CommentContent from "./commentContent";
import {useContext, useEffect, useState} from "react";
import {getCommentById, postComment} from "../../../utils/fetcher/posts";
import {clientContext} from "../../../utils/context";
export default function CommentPostModal({children,onClose,parentProps}){
    const [comments, setComments] = useState([]);
    const {userId} = useContext(clientContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchComments = async () => {
        try{
            return await getCommentById(parentProps.data.id);
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchComments().then(res => {
            setComments(res);
        });
    }, [])

    const handleAddComment = (content) => {
        postComment(parentProps.data.id, content, userId).then(res => {
            setComments(prev => [...prev, res]);
        })
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>

            <div className={"bg-white p-1.5 rounded-lg z-10 flex flex-col gap-1 " + style.commentContainer}>
                <div className="w-full flex items-center justify-between">
                    <button className="text-blue-800" onClick={onClose}>
                        <CgClose className="w-5 h-5"/>
                    </button>

                    <div className="px-2 text-md font-bold text-zinc-400">{parentProps.user.username}</div>
                </div>

                <div className="h-full w-full overflow-x-hidden overflow-y-auto">
                    <div className="absolute w-full">
                        {parentProps.data.content}
                        {children}

                        {/* comment container */}
                        <hr className="h-0.5 bg-gray-300 border-0 my-2 mr-1.5"/>
                        <div className="w-full flex flex-col">
                            {
                                comments.length === 0 ? <p>Pas de commentaires</p> :
                                comments.map(v => (
                                    <CommentContent key={v.id} data={v}/>
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