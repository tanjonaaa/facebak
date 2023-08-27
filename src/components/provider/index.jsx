import {clientContext} from "../../utils/context";
import {useEffect, useState} from "react";
import {getUserById} from "../../utils/fetcher/users";

const ClientProvider = ({children}) => {
    const [userData,setUserData] = useState({});
    const userId = 'de5b5a7f-d145-45a3-b0a1-ae2b5bb330fc'; // add some features like this

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