import "./skillContainer.css";

import { FaBolt } from "react-icons/fa6";
import { AiFillDatabase } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa6";
import { RiToolsFill } from "react-icons/ri";

import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

const SkillContainer = ({ children }) => {

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '60px',
            duration: 1000,
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)', // Deixa o movimento mais "elástico"
            reset: true
        });

        // A mágica acontece aqui no 'interval'
        sr.reveal('.skill', { 
            origin: 'bottom', 
            interval: 100 // Intervalo de 100ms entre cada item
        });
    }, []);

    return (
        <div className="skills-container">
            <h2>Skills<span style={{color: "skyblue"}}> .</span></h2>
            <p>Tecnologias com as quais trabalho para criar soluções digitais modernas.</p>
            <div>
                <span>Frontend <FaBolt style={{color: "orange"}}/> </span>
                <span>Backend <AiFillDatabase style={{color: "green"}}/> </span>
                <span>Databases <FaDatabase style={{color: "yellow"}}/> </span>
                <span>Ferramentas <RiToolsFill style={{color: "gren"}}/> </span>
            </div>
            { children }
        </div>
    );
}

export default SkillContainer;