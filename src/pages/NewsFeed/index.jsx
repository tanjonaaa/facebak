import {useEffect, useState} from "react";
import {News} from "./News/news";
import {getPosts} from "../../utils/fetcher/posts";
import AsideLeft from "./asideLeft";
import AddPost from "./AddPost";
import AsideRight from "./AsideRight";
import {Navbar} from "../../components/Navbar";
import NewsSkeleton from "./NewsSkeleton";

export const NewsFeed = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try{
            return await getPosts();
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPosts().then(posts => {
            setPosts(posts)
        });
    }, [])

    return (
        <>
            <Navbar />
            <div className="w-full flex mt-14" id="portal-comment">
                <AsideLeft/>

                <main className="mainPage flex flex-col gap-4 w-full">
                    <AddPost/>

                    {
                        (posts && posts.length)
                            ? posts.map(post => (
                                <News key={post.id} data={post}/>
                            ))
                            : (
                                <>
                                    <NewsSkeleton/>
                                    <NewsSkeleton/>
                                </>
                            )
                    }
                </main>

                <AsideRight/>
            </div>
        </>
    );
}