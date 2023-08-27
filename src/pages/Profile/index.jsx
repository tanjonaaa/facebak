import {useContext} from "react";
import {clientContext} from "../../utils/context";
import {Navbar} from "../../components/Navbar";
import useImageChecker from "../../utils/hooks/useImageChecker";
import {FaUser} from "react-icons/fa";
import {BiEdit} from "react-icons/bi";
import {BsFillPostcardFill} from "react-icons/bs";
import BtnAddPost from "./BtnAddPost";

const Profile = () => {
    const {userData} = useContext(clientContext);
    const imageSrc = (userData && userData.avatar) ? '/photo.jpg' : '';
    const ProfileImage = useImageChecker(
        imageSrc,
        <FaUser className="w-14 h-14 text-zinc-500"/>
    );
    const ProfileBg = useImageChecker(
        imageSrc,
        <></>,
        {
            className: "absolute h-full w-full"
        }
    );

    return (
        <>
            <Navbar/>
            <div className="w-full flex mt-14 justify-center" id="post-page">
                <div className="w-4/5 flex flex-col">

                    <div className="relative h-52 bg-zinc-200 flex justify-center rounded-b-2xl">
                        { ProfileBg }

                        <div className="text-lg py-5">
                            {
                                (userData && userData.bio) &&
                                userData.bio
                            }
                        </div>

                        <div className="absolute bottom-0 h-0 gap-4 w-full flex items-center">
                            <div className="overflow-hidden flex items-center justify-center h-40 w-40 border-8 border-white rounded-full flex-shrink-0 bg-zinc-300">
                                {ProfileImage}
                            </div>

                            <div className="w-full flex flex-col justify-between gap-4">
                                <div className="h-9 flex items-center">
                                <span className="text-2xl font-bold text-zinc-800">
                                    {
                                        (userData && userData.username) &&
                                        userData.username
                                    }
                                </span>
                                </div>
                                <div className="h-9 flex items-center justify-between">
                                    <span className="text-md">
                                        {
                                            (userData && userData.email) &&
                                            userData.email
                                        }
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <BtnAddPost/>

                                        <button className="text-white rounded-md bg-blue-500 py-1 px-2 flex items-center gap-2 hover:bg-blue-400">
                                            <BiEdit/>
                                            <span className="font-semibold">Edit profile</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-20 -z-10"></div>

                    <div className="flex items-center justify-center">
                        <img className="w-1/3" src="/illustrations/Posts-rafiki.svg" alt=""/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile;