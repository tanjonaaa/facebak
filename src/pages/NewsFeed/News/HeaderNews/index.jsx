import TimesAgo from "../../../../utils/TimesAgo";
import React from "react";
import {FaUser} from "react-icons/fa6";
import useImageChecker from "../../../../utils/hooks/useImageChecker";

export const HeaderNews = ({parentData}) => {
    const imageClassName = 'avatar-container flex w-12 items-center ' +
        'justify-center h-12 object-cover rounded-full bg-gray-500';

    const hasImage = useImageChecker(
        parentData.avatar,
        <FaUser className="w-6 h-6 text-blue-600"/>,
        {
            className: imageClassName
        },
    );

    return (
        <div className="header-news-component flex gap-2 items-center">
            <div className="avatar-container flex w-12 items-center justify-center h-12 rounded-full bg-gray-300">
                { hasImage }
            </div>
            <div className="meta-news-container flex flex-col gap-1">
                <span className="username leading-3 font-bold text-gray-700">{parentData.username}</span>
                <span className="text-xs text-gray-600 font-semibold">
                    {TimesAgo(parentData.updatedAt)}
                </span>
            </div>
        </div>
    );
}