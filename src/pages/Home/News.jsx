import React from 'react'
import { useState,useEffect } from 'react';
import { HiOutlineHeart } from "react-icons/hi";
import {BiCommentDots} from "react-icons/bi";
import {AiFillHeart} from "react-icons/ai";
import {BiSolidComment} from "react-icons/bi"
import axios from 'axios';
function News() {
    const data = {
        user: "Maria Rnd",
        description:"Artificial Intelligence (AI) has woven itself into the fabric of our daily existence, streamlining tasks and mimicking human intellect. It's undeniable that integrating AI into our lives was a prudent move, expediting communication, information retrieval, and problem-solving. AI's prowess has endowed the world with efficiency and unending progress.",
        hour:"1h34mn"
    }

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

    const handleClickComment = () => {
        setOpenComment(!openedComment);
    }


    
    


  return (
    <div>
        
    <header className="flex p-2.5 py-3.5 fixed w-full bg-white border-b">
        <div className="flex justify-between w-full">
            <a href="#">App name or logo</a>
            <div>
                <a className="link-to-profile" href="/link-to-user-profile">
                    profile image
                </a>
            </div>
        </div>
    </header>

    <div className="h-12"></div>

    <div className="contentBody mt-3 flex w-full">
        <aside className="asideEmpty w-3/12 flex-shrink-0 p-2 h-screen">
            <div className="asidePadded w-100"></div>
        </aside>

        <main className="mainPage flex flex-col gap-4">

            <section className="news-component flex bg-white flex-col p-4 gap-4 border rounded-xl" id="multiplier">
                <div className="header-news-component flex gap-2 items-center">
                    <div className="avatar-container flex w-12 items-center justify-center h-12 rounded-full bg-gray-500">
                        <img src="/photo.jpg" className='avatar-container flex w-12 items-center justify-center h-12 object-cover rounded-full bg-gray-500' alt="" />
                    </div>
                    <div className="meta-news-container flex flex-col">
                        <span className="username leading-3 font-bold text-gray-700">{data.user}</span>
                        <span className="text-xs text-gray-600 font-semibold">{data.hour}</span>
                    </div>
                </div>
                <div className="news-content">
                    
                    <div className="text-container">{data.description}</div>
                </div>
                <div className="footer-news-component">
                    <div className="btn-row-container flex">
                        <div className='relative flex items-center justify-center'>
                            <button onClick={handleLikeClick} className="m-2 justify-center flex items-center rounded-btn p-1 rounded-md">
                            
                                <span className='absolute bottom-9'>{totalLike === 0 ? null : totalLike}</span>
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
            </section>

        </main>


        <aside className="asideEmpty w-3/12 flex-shrink-0 p-2 h-screen">
            <div className="asidePadded w-100"></div>
        </aside>
    </div>

    <div className="py-3"></div>
    </div>
  )
}

export default News