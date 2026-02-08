import "./contactContainer.css";

import { useContext, useEffect } from "react";
import GlobalContext from "../../context/globalContext";

import ScrollReveal from 'scrollreveal';

const ContactContainer = ({ children }) => {

    const GlobalData = useContext(GlobalContext);

    useEffect(() => {
        // Configuração do ScrollReveal
        const sr = ScrollReveal({
            origin: 'top',
            distance: '5rem',
            duration: 2000,
            reset: true, // Define se a animação repete ao rolar para cima
        });

        // Aplicando a classes específicas
        sr.reveal('.other-contacts', { delay: 200 });
        sr.reveal('.container-form', { delay: 400, origin: 'left' });

        // Limpeza (opcional, mas boa prática)
        return () => sr.destroy();
    }, []);

    return (
        <section ref={GlobalData.contactRef} className="contact-container">
            <h2>Contact<span style={{color: "skyblue"}}> .</span></h2>
            { children }
        </section>
    )
}

export default ContactContainer;