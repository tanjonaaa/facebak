import React, {useEffect, useState} from "react";
import {getUserById} from "../../../../utils/fetcher/users";
import useImageChecker from "../../../../utils/hooks/useImageChecker";
import {FaUser} from "react-icons/fa";

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
    })

    const ProfileImage = useImageChecker(
        user.photo,
        <div className="avatar-container flex w-12 items-center justify-center h-12 object-cover rounded-full bg-gray-500">
            <FaUser/>
        </div>,
        {
            className: 'avatar-container flex w-12 items-center ' +
                'justify-center h-12 object-cover rounded-full bg-gray-500'
        }
    );

    return (
        <div className="p-2.5 flex gap-2">
            { ProfileImage }
            <div className="rounded-r-md rounded-b-md px-2 py-1.5 bg-zinc-400 flex-col flex leading-4">
                <span className="text-xs font-semibold">{ user.username }</span>
                <span className="text-md">{ data.content }</span>
            </div>
        </div>
    )
}