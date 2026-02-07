import "./skillContainerSection.css";

import { useContext } from "react";
import GlobalContext from "../../context/globalContext";

const SkillContainerSection = ({ children }) => {

    const GlobalData = useContext(GlobalContext);

    return (
        <section ref={GlobalData.skillsRef} className="skills-container-section">
            { children }
        </section>
    )
}

export default SkillContainerSection;