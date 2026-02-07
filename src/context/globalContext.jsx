import { createContext, useState, useRef } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
    
    const [showModel, setShowModel] = useState(false);
    const [portfolio, setPortfolio] = useState({});

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    
    return (
        <GlobalContext.Provider value={{
            showModel,
            setShowModel,
            portfolio,
            setPortfolio,
            homeRef,
            aboutRef,
            skillsRef,
            portfolioRef,
            contactRef
        }}>
            { children }
        </GlobalContext.Provider>
    )

}

export default GlobalContext;