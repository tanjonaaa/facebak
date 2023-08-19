import {clientContext} from "../../utils/context";

const ClientProvider = ({children}) => {
    const userId = '9b12d8e1-75b4-44e9-939f-e35807a27d35'; // add some features like this

    return (
        <clientContext.Provider value={{
            userId
        }}>
            {children}
        </clientContext.Provider>
    )
}

export default ClientProvider;