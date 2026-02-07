import "./contactContainer.css";

import { useContext } from "react";
import GlobalContext from "../../context/globalContext";

const ContactContainer = ({ children }) => {

    const GlobalData = useContext(GlobalContext);

    return (
        <section ref={GlobalData.contactRef} className="contact-container">
            <h2>Contact<span style={{color: "skyblue"}}> .</span></h2>
            { children }
        </section>
    )
}

export default ContactContainer;