import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import CommentPostModal from "../CommentPostModal";
import {FooterNews} from "./FooterNews";
import {HeaderNews} from "./HeaderNews";
import {getUserById} from "../../../utils/fetcher";

export function Index({data}) {
    const [portal,setPortal] = useState(null);
    const [totalLike,setTotalLike] = useState(0);
    const [user, setUser] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchUser = async () => {
        try{
           return await getUserById(data.userId); 
        }catch(e){
            console.log(e)
        }
    }
    
    useEffect(() => {
        fetchUser().then(res => {
            setUser(res);
        })
    }, [])
    
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
                <CommentPostModal onClose={handleCloseModal}
                                  parentProps={{
                                      data: data,
                                      user: user
                                  }}
                />,
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
                        username: user.username,
                        avatar: user.photo,
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