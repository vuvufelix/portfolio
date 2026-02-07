import "./portfolioContainer.css";

import { useContext } from "react";
import GlobalContext from "../../context/globalContext";

const PortfolioContainer = ({ children }) => {

    const GlobalData = useContext(GlobalContext);

    return (
        <section ref={GlobalData.portfolioRef} className="portfolio-container">
            <h2>Portfolio<span style={{color: "skyblue"}}> .</span></h2>
            { children }
        </section>
    )
}

export default PortfolioContainer;