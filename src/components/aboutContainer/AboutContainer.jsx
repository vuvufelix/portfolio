import "./aboutContainer.css";

import { useContext, useEffect } from "react";
import GlobalContext from "../../context/globalContext";

import ScrollReveal from 'scrollreveal';

const AboutContainer = ({ children }) => {

    const GlobalData = useContext(GlobalContext);

    useEffect(() => {
        // Configuração do ScrollReveal
        const sr = ScrollReveal({
            origin: 'top',
            distance: '10rem',
            duration: 3000,
            reset: true, // Define se a animação repete ao rolar para cima
        });

        // Aplicando a classes específicas
        sr.reveal('.about-content', { delay: 200 });
        sr.reveal('.image-about', { delay: 400, origin: 'left' });

        // Limpeza (opcional, mas boa prática)
        return () => sr.destroy();
    }, []);

    return (
        <section ref={GlobalData.aboutRef} className="about-container">
            <h2>About<span style={{color: "skyblue"}}> .</span></h2>
            { children }
        </section>
    )
}

export default AboutContainer;