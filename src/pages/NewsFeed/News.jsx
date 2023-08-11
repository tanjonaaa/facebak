import React, {useState} from "react";
import {AiFillHeart} from "react-icons/ai";
import {HiOutlineHeart} from "react-icons/hi";
import {BiCommentDots, BiSolidComment} from "react-icons/bi";
import {createPortal} from "react-dom";
import CommentPostModal from "./CommentPostModal";
import TimesAgo from "../../utils/TimesAgo";

export function News({data}) {
    const [portal,setPortal] = useState(null);
    const [totalLike,setTotalLike] = useState(0);

    // Create a state variable for likes
    const [liked, setLikes] = useState(false);

    // Create a function to handle the click event

    const handleLikeClick = () => {
        setTotalLike(value => {
            if(!liked){
                return value + 1;
            }else{
                return value - 1;
            }
        })
        setLikes(!liked);
    }

    const [openedComment,setOpenComment] = useState(false);

    const handleCloseModal = () => {
        setPortal(null);
    }

    const handleClickComment = () => {
        setOpenComment(!openedComment);
        setPortal(
            createPortal(
                <CommentPostModal onClose={handleCloseModal} data={data}/>,
                document.getElementById("portal-comment")
            )
        )
    }

    return (
        <section className="news-component flex bg-white flex-col p-4 gap-4 border rounded-xl" id="multiplier">
            <div className="header-news-component flex gap-2 items-center">
                <div className="avatar-container flex w-12 items-center justify-center h-12 rounded-full bg-gray-500">
                    <img src="/photo.jpg" className='avatar-container flex w-12 items-center justify-center h-12 object-cover rounded-full bg-gray-500' alt="" />
                </div>
                <div className="meta-news-container flex flex-col">
                    <span className="username leading-3 font-bold text-gray-700">{data.username}</span>
                    <span className="text-xs text-gray-600 font-semibold">{TimesAgo(data.updatedAt)}</span>
                </div>
            </div>
            <div className="news-content">
                <div className="text-container">{data.content}</div>
            </div>
            <div className="footer-news-component">
                <div className="btn-row-container flex">
                    <div className='relative flex items-center justify-center'>
                        <button onClick={handleLikeClick} className="m-2 justify-center flex items-center rounded-btn p-1 rounded-md">
                            <span className='absolute bottom-6'>{totalLike === 0 ? null : totalLike}</span>

                            {
                                liked
                                    ? <AiFillHeart  className='w-6 h-6 text-red-600'/>
                                    : <HiOutlineHeart className='w-6 h-6'/>
                            }
                        </button>

                    </div>

                    <button className="m-2 rounded-btn p-1 rounded-md "
                            onClick={handleClickComment}>
                        <span className='absolute bottom-9'></span>
                        {
                            openedComment
                                ? <BiSolidComment  className='w-6 h-6'/>
                                : <BiCommentDots className='w-6 h-6'/>
                        }
                    </button>
                </div>
            </div>

            { portal }
        </section>
    )
}
