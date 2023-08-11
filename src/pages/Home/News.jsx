import React from 'react'
import { useState } from 'react';
import { HiOutlineHeart } from "react-icons/hi";
function News() {
    const data = {
        user: "Maria Rnd",
        description:"Artificial Intelligence (AI) has woven itself into the fabric of our daily existence, streamlining tasks and mimicking human intellect. It's undeniable that integrating AI into our lives was a prudent move, expediting communication, information retrieval, and problem-solving. AI's prowess has endowed the world with efficiency and unending progress.",
        hour:"1h34mn"
    }

    // Create a state variable for likes
    const [likes, setLikes] = useState(0);

    // Create a function to handle the click event
    const handleLikeClick = () => {
        if (likes === null) {
            setLikes(1);
        } else {
            setLikes(null);
        }
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
                    <div className="avatar-container flex w-12 items-center justify-center h-12 rounded-full bg-gray-500">avatar</div>
                    <div className="meta-news-container flex flex-col">
                        <span className="username leading-3 font-bold text-gray-700">{data.user}</span>
                        <span className="text-xs text-gray-600 font-semibold">{data.hour}</span>
                    </div>
                </div>
                <div className="news-content">
                    
                    <div className="text-container">{data.description}</div>
                </div>
                <div className="footer-news-component">
                    <div className="btn-row-container">
                        <button onClick={handleLikeClick} className="rounded-btn flex p-1 border rounded-md bg-gray-100 hover:bg-gray-300">
                            <span className='flex '>{likes}</span>
                            <HiOutlineHeart/>
                        </button>
                        <button className="rounded-btn p-1 border rounded-md bg-gray-100 hover:bg-gray-300">
                           
                            <span>0</span>
                            <span>comment</span>
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