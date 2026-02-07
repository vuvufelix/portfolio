import "./homeContent.css";

import { FaDownload } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import cv from "../../assets/curriculo.pdf";

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
                <a href="tel:+244929442549" target="_blank" rel="external">
                    Ligar Agora <BsFillTelephoneFill />
                </a>
                <a href={cv} download="curriculo.pdf" target="_blank" rel="external" className="cv">
                    Baixar currículo<FaDownload />
                </a>
            </div>
        </div>
    )
}

export default HomeContent;