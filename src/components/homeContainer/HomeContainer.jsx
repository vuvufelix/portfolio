import "./homeContainer.css";

import { useContext, useEffect } from "react";
import GlobalContext from "../../context/globalContext";

import ScrollReveal from 'scrollreveal';

const HomeContainer = ({ children }) => {

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
        sr.reveal('.first-content', { delay: 100 });
        sr.reveal('.my-img', { delay: 500, origin: 'left' });

        // Limpeza (opcional, mas boa prática)
        return () => sr.destroy();
    }, []);

    return (
        <section ref={GlobalData.homeRef} className="Home-container">
            { children }
        </section>
    )
}

export default HomeContainer;