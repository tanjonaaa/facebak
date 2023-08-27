import {clientContext} from "../../utils/context";
import {useEffect, useState} from "react";
import {getUserById} from "../../utils/fetcher/users";

const ClientProvider = ({children}) => {
    const [userData,setUserData] = useState({});
    const userId = '9b12d8e1-75b4-44e9-939f-e35807a27d35'; // add some features like this

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
            userData
        }}>
            {children}
        </clientContext.Provider>
    )
}

export default ClientProvider;