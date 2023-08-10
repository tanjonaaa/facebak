import { useEffect, useState } from "react";
import {getPosts} from '../../utils/fetcher/index.js'

export const NewsFeed = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const posts = await getPosts();

        setPosts(posts.data);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <main className="mainPage flex flex-col gap-4">
            {posts.map(post => {
                return (
                    <p>test</p>
                );
            })}
        </main>
    );
}