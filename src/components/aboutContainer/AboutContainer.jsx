import "./aboutContainer.css";

import { useContext } from "react";
import GlobalContext from "../../context/globalContext";

const AboutContainer = ({ children }) => {

    const GlobalData = useContext(GlobalContext);

    return (
        <section ref={GlobalData.aboutRef} className="about-container">
            <h2>About<span style={{color: "skyblue"}}> .</span></h2>
            { children }
        </section>
    )
}

export default AboutContainer;