import { createContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
    
    const [showModel, setShowModel] = useState(false);
    const [portfolio, setPortfolio] = useState({});
    
    return (
        <GlobalContext.Provider value={{
            showModel,
            setShowModel,
            portfolio,
            setPortfolio
        }}>
            { children }
        </GlobalContext.Provider>
    )

}

export default GlobalContext;