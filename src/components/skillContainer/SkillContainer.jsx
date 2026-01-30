import "./skillContainer.css";

import { FaBolt } from "react-icons/fa6";
import { AiFillDatabase } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa6";
import { RiToolsFill } from "react-icons/ri";

const SkillContainer = ({ children }) => {
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