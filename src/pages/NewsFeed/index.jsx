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
        <main className="mainPage flex flex-col gap-4">
            {posts.map(post => {
                return (
                    <News key={post.id} data={post}/>
                );
            })}
        </main>
    );
}