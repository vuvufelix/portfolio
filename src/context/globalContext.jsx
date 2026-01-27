import { createContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
    
    const [showModel, setShowModel] = useState(false);
    
    return (
        <GlobalContext.Provider value={{
            showModel,
            setShowModel
        }}>
            { children }
        </GlobalContext.Provider>
    )

}

export default GlobalContext;