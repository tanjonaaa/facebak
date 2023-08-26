import {useContext} from "react";
import {clientContext} from "../../utils/context";
import {Navbar} from "../../components/Navbar";
import useImageChecker from "../../utils/hooks/useImageChecker";
import {FaUser} from "react-icons/fa";
import BioContainer from "./BioContainer";
import Banner from "./Banner";

const Profile = () => {
    const {userData} = useContext(clientContext);
    const imageSrc = (userData && userData.photo) ? userData.photo : '';

    const ProfileImage = useImageChecker(
        imageSrc,
        <FaUser className="w-14 h-14 text-zinc-500"/>,
        {
            className: 'w-full h-full object-cover'
        }
    );
    const ProfileBg = useImageChecker(
        imageSrc,
        <></>,
        {
            className: "absolute h-full w-full object-cover blur-xl shadow-md"
        }
    );

    return (
        <>
            <Navbar/>
            <div className="w-full flex mt-14 justify-center" id="post-page">
                <div className="w-4/5 flex flex-col">

                    <div className="relative h-80 bg-zinc-200 flex justify-center rounded-b-2xl">
                        { ProfileBg }
                        <Banner ProfileImage={ProfileImage}
                                userData={userData}/>
                    </div>
                    <div className="h-24 -z-10"></div>
                    <div className="flex flex-col w-full">
                        <BioContainer>
                            {
                                (userData && userData.bio) &&
                                userData.bio
                            }
                        </BioContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;