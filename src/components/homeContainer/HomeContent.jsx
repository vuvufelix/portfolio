import "./homeContent.css";

import { FaDownload } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const HomeContent = () => {
    return (
        <div className="first-content">
            <span>Olá, Eu sou o</span>
            <strong>vuvu félix miguel joão</strong>
            <small>Sou um Desenvolvedor Web</small>
            <p>
                Desenvolvedor front-end apaixonado por criar interfaces web e mobile inovadoras com React.js e React Native, sempre em busca de contribuir para projetos desafiadores. 
            </p>
            <div className="button-first-content">
                <button>Ligar Agora <BsFillTelephoneFill /></button>
                <button className="cv">Baixar currículo<FaDownload /> </button>
            </div>
        </div>
    )
}

export default HomeContent;