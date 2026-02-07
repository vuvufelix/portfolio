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
                        <a href="https://www.facebook.com/gabrielfelix.feliboy" target="_blank" rel="external">
                            <FaFacebookSquare className="social-media fb"/>
                        </a>
                        <a href="https://github.com/vuvufelix" target="_blank" rel="external">
                            <FaGithub className="social-media gitb"/>
                        </a>
                        <a href="https://www.linkedin.com/in/vuvu-f%C3%A9lix-6a09a42a3/" target="_blank" rel="external">
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