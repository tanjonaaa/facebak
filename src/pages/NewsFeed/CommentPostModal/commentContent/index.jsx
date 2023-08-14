import React, {useEffect, useState} from "react";
import {getUserById} from "../../../../utils/fetcher/users";

export default function CommentContent({data}){
    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try{
            return await getUserById(data.userId);
        }catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchUser().then(res => {
            setUser(res);
        })
    }, [])

    return (
        <div className="p-2.5 flex gap-2">
            <img src={user.photo} className='avatar-container flex w-12 items-center justify-center h-12 object-cover rounded-full bg-gray-500' alt="" />
            <div className="rounded-md px-2 py-1.5 bg-gray-500 flex-col flex leading-4">
                <span className="text-xs font-semibold">{ data.username }</span>
                <span className="text-md">{ data.content }</span>
            </div>
        </div>
    )
}