import {clientContext} from "../../utils/context";
import {useEffect, useState} from "react";
import {getUserById} from "../../utils/fetcher/users";
import Cookies from "js-cookie";
const ClientProvider = ({children}) => {
    const cookie = Cookies.get("loggedUser");
    const loggedUser = JSON.parse(cookie ? cookie : "{}");

    const [userData,setUserData] = useState(loggedUser);
    const userId = userData.id; // add some features like this

    const fetchUser = async () => {
        try {
            const data = await getUserById(userId);
            if(!userData.username && data) setUserData(data);
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        if(userId){
            fetchUser().catch(e => {
                console.log(e);
            })
        }
    })

    return (
        <clientContext.Provider value={{
            userId,
            userData,
            setUserData
        }}>
            {children}
        </clientContext.Provider>
    )
}

export default ClientProvider;