import {MdLogout} from "react-icons/md";
import {useContext} from "react";
import {clientContext} from "../../../utils/context";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
const AsideRight = () => {
    const {userData} = useContext(clientContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove("loggedUser");
        Cookies.remove("identityToken");
        navigate("/login");
    }

    return (
        <aside className="w-3/12 flex-shrink-0 p-2 sticky top-14"
               style={{height: 'calc(100vh - 3.7em)'}}>
            <div className="flex flex-col gap-2 w-full h-full bg-zinc-50 overflow-hidden">
                <div className="flex w-full flex-col gap-2 py-2">
                    <h2 className="px-2 text-lg font-semibold">
                        {
                            (userData && userData.username) &&
                            `Hey, ${userData.username} !`
                        }
                    </h2>
                    <img src="/illustrations/Social%20media-rafiki.svg"
                         alt="illustrations"
                         className="w-full"/>
                </div>
                <div className="absolute bottom-0 left-0 p-2">
                    <button className="flex items-center gap-1 border rounded-md p-2 text-cerulean"
                            onClick={handleLogout}>
                        <MdLogout className="w-5 h-5"/>
                        <span>Log out</span>
                    </button>
                </div>
                <div className="absolute bottom-0 right-0 w-0 h-0 flex items-center justify-center">
                    <div className="absolute w-72 h-72 bg-blue-600 rounded-full"></div>
                </div>
            </div>
        </aside>
    )
}

export default AsideRight;