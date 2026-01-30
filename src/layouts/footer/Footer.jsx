import "./footer.css";

import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container-social">
                <span>Dev<strong>Félix{"/>"}</strong></span>
                <div className="social-container">
                    <span>Redes Sociais</span>
                    <div className="social">
                        <a href="#">
                            <FaFacebookSquare className="social-media fb"/>
                        </a>
                        <a href="#">
                            <FaGithub className="social-media gitb"/>
                        </a>
                        <a href="#">
                            <BsLinkedin className="social-media ldin"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="all-right">
                &copy; 2026 - Todos os direitos reservados
            </div>
        </footer>
    )
}

export default Footer