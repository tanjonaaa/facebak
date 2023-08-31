import UsernameContainer from "../UsernameContainer";
import BtnAddPost from "../BtnAddPost";
import BtnEdit from "../BtnEdit";

const Banner = ({ProfileImage, userData}) => {
    return (
        <div className="absolute bottom-0 h-0 gap-4 w-full flex items-center">
            <div className="overflow-hidden flex items-center justify-center h-40 w-40 border-8
                            border-white rounded-full flex-shrink-0 bg-zinc-300">
                {ProfileImage}
            </div>

            <div className="w-full flex flex-col justify-between gap-4">
                <UsernameContainer>
                    {
                        (userData && userData.username) &&
                        userData.username
                    }
                </UsernameContainer>
                <div className="h-9 flex items-center justify-between">
                                    <span className="text-md">
                                        {
                                            (userData && userData.email) &&
                                            userData.email
                                        }
                                    </span>
                    <div className="flex items-center gap-1">
                        <BtnAddPost/>
                        <BtnEdit/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;