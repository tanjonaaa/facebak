import {AiFillHeart} from "react-icons/ai";
import {HiOutlineHeart} from "react-icons/hi";
import {BiCommentDots, BiSolidComment} from "react-icons/bi";
import React from "react";

export const FooterNews = ({parentProps}) => {
    return (
        <div className="footer-news-component">
            <div className="btn-row-container flex">
                <div className='relative flex items-center justify-center'>
                    <button onClick={parentProps.handleLikeClick} className="m-2 justify-center flex items-center rounded-btn p-1 rounded-md">
                        <span className='absolute bottom-6'>{parentProps.totalLike === 0 ? null : parentProps.totalLike}</span>

                        {
                            parentProps.liked
                                ? <AiFillHeart  className='w-6 h-6 text-red-600'/>
                                : <HiOutlineHeart className='w-6 h-6'/>
                        }
                    </button>

                </div>

                <button className="m-2 rounded-btn p-1 rounded-md "
                        onClick={parentProps.handleClickComment}>
                    <span className='absolute bottom-9'></span>
                    {
                        parentProps.openedComment
                            ? <BiSolidComment  className='w-6 h-6'/>
                            : <BiCommentDots className='w-6 h-6'/>
                    }
                </button>
            </div>
        </div>
    )
}