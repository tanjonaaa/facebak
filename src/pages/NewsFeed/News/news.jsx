import React, {useContext, useEffect, useState} from "react";
import {createPortal} from "react-dom";
import CommentPostModal from "../CommentPostModal";
import {FooterNews} from "./FooterNews";
import {HeaderNews} from "./HeaderNews";
import {deleteAReaction, getReaction, sendReactionToPost} from "../../../utils/fetcher/reactions";
import {clientContext} from "../../../utils/context";

export function News({data}) {
    const {userId} = useContext(clientContext);
    const [portal,setPortal] = useState(null);
    const [totalLike,setTotalLike] = useState(null);

    useEffect(() => {
        if(data.id){
            getReaction(data.id)
                .then(v => {
                    const data = v.filter(like => {
                        return like.type === 'LIKE'
                    });
                    if(totalLike === null) setTotalLike(data.length);
                })
                .catch(e => {
                    console.log(e);
                })
        }
    })

    // Create a state variable for likes
    const [liked, setLikes] = useState(false);

    // Create a function to handle the click event

    const handleLikeClick = () => {
        (async () => {
            try {
                let accumulator;

                if(!liked){
                    const isSet = await sendReactionToPost( data.id, {type: 'LIKE', userId} )
                    if(isSet) accumulator = 1;
                }else {
                    const isDeleted = await deleteAReaction( data.id, {type: 'LIKE', userId} )
                    if (isDeleted) accumulator = -1;
                }

                setTotalLike(value => {
                    return value + accumulator;
                })
            }catch (e){
                console.log(e);
            }
        })()
        setLikes(!liked);
    }

    const handleCloseModal = () => {
        setPortal(null);
    }

    const handleClickComment = () => {
        setPortal(
            createPortal(
                <CommentPostModal onClose={handleCloseModal}
                                  parentProps={{
                                      data: data,
                                      user: data.user
                                  }}
                />,
                document.getElementById("portal-comment")
            )
        )
    }

    return (
        <div
            className="flex bg-white flex-col p-4 gap-4 border rounded-xl"
        >

            <HeaderNews
                parentData={
                    {
                        username: data.user.username,
                        avatar: data.user.photo,
                        updatedAt: data.updatedAt
                    }
                }
            />

            <div className="news-content">
                <h2 className="text-zinc-500 font-semibold">{data.title}</h2>
                <div className="text-container">{data.content}</div>
            </div>

            <FooterNews
                parentProps={
                    {
                        handleLikeClick,
                        handleClickComment,
                        liked,
                        totalLike
                    }
                }
            />

            { portal }
        </div>
    )
}
