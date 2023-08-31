import BtnAsideLeft from "./BtnAsideLeft";
import {BiHome} from "react-icons/bi";
import {FaUser} from "react-icons/fa";
import {useContext} from "react";
import {clientContext} from "../../../utils/context";

const AsideLeft = () => {
    const {userData} = useContext(clientContext);
    const customHeight = {height: 'calc(100vh - 3.7em)'};

    return (
        <aside className="w-3/12 flex-shrink-0 p-2 sticky top-14"
               style={customHeight}>
            <div className="flex flex-col gap-2 w-full h-full bg-zinc-50 p-2">
                <BtnAsideLeft to="/" icon={<BiHome/>} label="Home"/>
                <BtnAsideLeft to={
                    "/profile/" + ((userData && userData.username) && userData.username)
                }
                              icon={<FaUser/>} label="Profile"/>
            </div>
        </aside>
    )
}

export default AsideLeft;