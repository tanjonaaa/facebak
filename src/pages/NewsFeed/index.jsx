import { useEffect, useState } from "react";
import {getPosts} from '../../utils/fetcher';
import { News } from "./News";

export const NewsFeed = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const posts = await getPosts();
            setPosts(posts);
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div className="w-full flex mt-4" id="portal-comment">
            <aside className="asideEmpty w-3/12 flex-shrink-0 p-2 h-screen">
                <div className="asidePadded w-100"></div>
            </aside>

            <main className="mainPage flex flex-col gap-4 w-full">
                {posts.map(post => {
                    return (
                        <News key={post.id} data={post}/>
                    );
                })}
            </main>

            <aside className="asideEmpty w-3/12 flex-shrink-0 p-2 h-screen">
                <div className="asidePadded w-100"></div>
            </aside>
        </div>
    );
}