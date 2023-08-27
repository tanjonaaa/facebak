import { Link } from "react-router-dom";
import {BiSolidUser} from "react-icons/bi";
import {useContext} from "react";
import {clientContext} from "../../utils/context";

export const Navbar = () => {
    const {userData} = useContext(clientContext);

    return (
        <header className="flex px-3 pt-2.5 pb-1 fixed w-full bg-white border-b z-50">
            <div className="flex justify-between w-full items-center">
                <Link to="/" className="text-picton-blue text-xl font-bold">Facebak</Link>
                <Link to="/login">Connexion</Link>
                <div>
                    <Link className="flex items-center justify-center gap-1"
                          to={"/profile/" + ((userData && userData.username) && userData.username)}>

                        <div className="flex leading-3 flex-col justify-end">
                            <span className="font-semibold text-md text-end text-cerulean">
                                {
                                    (userData && userData.username) &&
                                    userData.username
                                }
                            </span>
                            <span className="text-xs text-end">
                                {
                                    (userData && userData.email) &&
                                    userData.email
                                }
                            </span>
                        </div>

                        <div className="flex-shrink-0 link-to-profile bg-zinc-200 p-2 flex
                        items-center justify-center rounded-full">
                            <BiSolidUser className="w-6 h-6"/>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}