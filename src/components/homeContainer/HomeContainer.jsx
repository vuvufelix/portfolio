import "./homeContainer.css";

import { useContext } from "react";
import GlobalContext from "../../context/globalContext";

const HomeContainer = ({ children }) => {

    const GlobalData = useContext(GlobalContext);

    return (
        <section ref={GlobalData.homeRef} className="Home-container">
            { children }
        </section>
    )
}

export default HomeContainer;