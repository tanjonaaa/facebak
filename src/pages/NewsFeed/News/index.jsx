import React, {useState} from "react";
import {AiFillHeart} from "react-icons/ai";
import {HiOutlineHeart} from "react-icons/hi";
import {BiCommentDots, BiSolidComment} from "react-icons/bi";
import {createPortal} from "react-dom";
import CommentPostModal from "../CommentPostModal";
import TimesAgo from "../../../utils/TimesAgo";
import {FooterNews} from "./FooterNews";
import {HeaderNews} from "./HeaderNews";

export function Index({data}) {
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
        <section
            className="news-component flex bg-white flex-col p-4 gap-4 border rounded-xl"
            id="multiplier"
        >

            <HeaderNews
                parentData={
                    {
                        username: data.username,
                        updatedAt: data.updatedAt
                    }
                }
            />

            <div className="news-content">
                <div className="text-container">{data.content}</div>
            </div>

            <FooterNews
                parentProps={
                    {
                        handleLikeClick,
                        handleClickComment,
                        openedComment,
                        liked,
                        totalLike
                    }
                }
            />

            { portal }
        </section>
    )
}
