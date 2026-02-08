import "./portfolioContainer.css";

import { useContext, useEffect } from "react";
import GlobalContext from "../../context/globalContext";

import ScrollReveal from 'scrollreveal';

const PortfolioContainer = ({ children }) => {

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '60px',
            duration: 1000,
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)', // Deixa o movimento mais "elástico"
            reset: true
        });

        // A mágica acontece aqui no 'interval'
        sr.reveal('.project', { 
            origin: 'bottom', 
            interval: 100 // Intervalo de 100ms entre cada item
        });
    }, []);

    const GlobalData = useContext(GlobalContext);

    return (
        <section ref={GlobalData.portfolioRef} className="portfolio-container">
            <h2>Portfolio<span style={{color: "skyblue"}}> .</span></h2>
            { children }
        </section>
    )
}

export default PortfolioContainer;