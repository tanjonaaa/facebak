import {AiFillHeart} from "react-icons/ai";
import {HiOutlineHeart} from "react-icons/hi";
import {BiCommentDots, BiSolidComment} from "react-icons/bi";
import React, {useState} from "react";

export const FooterNews = ({parentProps}) => {
    const [isHoverLike,setHoverLike] = useState(false);
    const [isHoverComment,setHoverComment] = useState(false);

    const handleHoverLike = () => {
        setHoverLike(true);
    }

    const handleLeaveHoverLike = () => {
        setHoverLike(false);
    }

    const handleHoverComment = () => {
        setHoverComment(true);
    }

    const handleLeaveComment = () => {
        setHoverComment(false);
    }

    return (
        <div className="footer-news-component">
            <div className="btn-row-container flex">
                <div className='relative flex items-center justify-center'>
                    <button onClick={parentProps.handleLikeClick}
                            onMouseOver={handleHoverLike}
                            onTouchStart={handleHoverLike}
                            onMouseLeave={handleLeaveHoverLike}
                            onTouchEnd={handleLeaveHoverLike}
                            className="m-2 justify-center flex items-center rounded-btn p-1 rounded-md">
                        {
                            (parentProps.liked || isHoverLike)
                                ? <AiFillHeart  className='w-6 h-6 text-red-600'/>
                                : <HiOutlineHeart className='w-6 h-6'/>
                        }
                        <span className='absolute top-6'>
                            {parentProps.totalLike === 0 ? null : parentProps.totalLike}
                        </span>
                    </button>

                </div>

                <button className="m-2 rounded-btn p-1 rounded-md "
                        onMouseOver={handleHoverComment}
                        onTouchStart={handleHoverComment}
                        onMouseLeave={handleLeaveComment}
                        onTouchEnd={handleLeaveComment}
                        onClick={parentProps.handleClickComment}>
                    <span className='absolute bottom-9'></span>
                    {
                        isHoverComment
                            ? <BiSolidComment  className='w-6 h-6'/>
                            : <BiCommentDots className='w-6 h-6'/>
                    }
                </button>
            </div>
        </div>
    )
}