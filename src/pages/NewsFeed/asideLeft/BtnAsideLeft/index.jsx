import {NavLink} from "react-router-dom";
import {cloneElement} from "react";

const BtnAsideLeft = ({to,label,icon}) => {
    const Clone = cloneElement(
        icon,
        {
            className: 'w-6 h-6'
        }
    );

    const checkActive = ({isActive}) => {
        if(isActive) return "bg-blue-100 hover:bg-blue-200 flex gap-2 p-2 rounded-lg text-blue-400";
        return "flex gap-2 p-2 rounded-lg text-blue-400 hover:bg-zinc-200"
    }

    return (
        <NavLink to={to} className={checkActive}>
            {Clone}
            <span className="text-md font-semibold text-inherit">{label}</span>
        </NavLink>
    )
}

export default BtnAsideLeft;