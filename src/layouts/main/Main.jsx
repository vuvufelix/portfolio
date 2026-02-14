import "./Main.css";

// Imagens
import vuvu from "../../assets/vuvu2.png";
import build from "../../assets/build.webp";
import imageProject1 from "../../assets/imagemProject.png";
import neneth from "../../assets/nenet.png";
import ferMovie from "../../assets/ferMovie.png";
import quiz from "../../assets/quiz.jpg";
import agend from "../../assets/agendamento.jpg";
import login from "../../assets/login.png";

// Icones
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

// Hooks
import { useContext } from "react";
import GlobalContext from "../../context/globalContext";

// Componetes
import Carousel from "../../components/carousel/Carousel";
import Group from "../../components/groupCarrousel/Group";
import AboutContainer from "../../components/aboutContainer/AboutContainer";
import AboutContainerInfo from "../../components/aboutContainer/AboutContainerInfo";
import About from "../../components/aboutContainer/About.jsx";
import SkillContainer from "../../components/skillContainer/SkillContainer.jsx";
import SkillContainerSection from "../../components/skillContainer/SkillContainerSection.jsx";
import PortfolioContainer from "../../components/portfolioContainer/PortfolioContainer.jsx";
import PortfolioContainerProjects from "../../components/portfolioContainer/PortfolioContainerProjects.jsx";
import ContactContainer from "../../components/contactContainer/ContactContainer.jsx";
import ContactInfo from "../../components/contactContainer/ContactInfo.jsx";
import OtherContacts from "../../components/contactContainer/OtherContacts.jsx";
import FormContainer from "../../components/contactContainer/FormContainer.jsx";
import HomeContainer from "../../components/homeContainer/HomeContainer.jsx";
import HomeContent from "../../components/homeContainer/HomeContent.jsx";

const Main = () => {

    const GlobalData = useContext(GlobalContext);

    const iconCarousel = [
        <IoLogoJavascript className="card"/>,
        <FaHtml5 className="card" />,
        <SiCss3 className="card"/>,
        <RiReactjsLine className="card"/>,
        <FaGitAlt className="card"/>,
        <FaGithub className="card"/>,
        <FaNode className="card"/>,
        <RiTailwindCssFill className="card"/>,
        <SiExpress className="card"/>,
        <TbBrandReactNative className="card"/>,
        <SiTypescript className="card"/>,
        <SiMysql className="card"/>
    ];

    const skillsArray = [
        {
            icon: <RiReactjsLine className="icon-skill" style={{color: "skyblue"}}/>,
            name: "React js",
            leavel: "Intermediário"
        },
        {
            icon: <SiTypescript className="icon-skill" style={{color: "blue"}}/>,
            name: "TypeScript",
            leavel: "Intermediário"
        },
        {
            icon: <FaHtml5 className="icon-skill" style={{color: "red"}}/>,
            name: "HTML5",
            leavel: "Avançado"
        },
        {
            icon: <SiCss3 className="icon-skill" style={{color: "blue"}}/>,
            name: "CSS3",
            leavel: "Avançado"
        },
        {
            icon: <TbBrandReactNative className="icon-skill" style={{color: "blue"}}/>,
            name: "React Native",
            leavel: "Intermediário"
        },
        {
            icon: <IoLogoJavascript className="icon-skill" style={{color: "yellow"}}/>,
            name: "JavaScript",
            leavel: "Intermediário"
        },
        {
            icon: <GrMysql className="icon-skill" style={{color: "blue"}}/>,
            name: "MySQL",
            leavel: "Intermediário"
        },
        {
            icon: <FaNode className="icon-skill" style={{color: "green"}}/>,
            name: "Node.js",
            leavel: "Intermediário"
        },
        {
            icon: <SiExpress className="icon-skill" style={{color: "black"}}/>,
            name: "Express.js",
            leavel: "Intermediário"
        },
        {
            icon: <FaGitAlt className="icon-skill" style={{color: "red"}}/>,
            name: "Git",
            leavel: "Avançado"
        },
        {
            icon: <RiTailwindCssFill className="icon-skill" style={{color: "skyblue"}}/>,
            name: "Tailwind CSS",
            leavel: "Intermediário"
        },
        {
            icon: <FaGithub className="icon-skill" style={{color: "black"}}/>,
            name: "GitHub",
            leavel: "Avançado"
        }
    ];

    const portfolioProjects = [
        {
            id: "1",
            name: "neneth",
            icons: [
                <FaNode className="newI" style={{ color: "green"}}/>,
                <SiCss3 className="newI" style={{color: "blue"}}/>,
                <IoLogoJavascript className="newI" style={{color: "yellow"}}/>,
                <RiReactjsLine className="newI" style={{color: "skyblue"}}/>
            ],
            image: neneth,
            description: `Este é um projeto de E-commerce moderno e responsivo construído integralmente com ReactJS. 
                Ele simula o fluxo de compra de ponta a ponta, desde a listagem de produtos até a finalização do pedido, 
                utilizando tecnologias atuais para gerenciamento de estado e requisições assíncronas.
            `,
            link: "https://nenet.vercel.app"
        },
        {
            id: "2",
            name: "HairDay",
            icons: [
                <SiCss3 className="newI" style={{color: "blue"}}/>,
                <IoLogoJavascript className="newI" style={{color: "yellow"}}/>,
                <RiReactjsLine className="newI" style={{color: "skyblue"}}/>
            ],
            image: imageProject1,
            description: `O HairDay é uma aplicação web moderna e intuitiva, desenvolvida em React, 
                focada em simplificar o agendamento de serviços de beleza (cortes de cabelo) e a gestão diária da agenda. 
                Utiliza uma interface limpa e escura que facilita a visualização dos compromissos por período (Manhã, Tarde e Noite).
            `,
            link: "https://hair-day-three.vercel.app"
        },
        {
            id: "3",
            name: "FerMovie",
            icons: [
                <SiCss3 className="newI" style={{color: "blue"}}/>,
                <IoLogoJavascript className="newI" style={{color: "yellow"}}/>,
                <RiReactjsLine className="newI" style={{color: "skyblue"}}/>
            ],
            image: ferMovie,
            description: `A aplicação permite visualizar os melhores filmes avaliados, assistir aos 
                trailers mais recentes e explorar detalhes de cada título — tudo isso com um design moderno e interativo.
            `,
            link: "https://fer-movie.vercel.app"
        },
        {
            id: "4",
            name: "Quiz javaScript",
            icons: [
                <FaHtml5  className="newI" style={{color: "red"}}/>,
                <SiCss3 className="newI" style={{color: "blue"}}/>,
                <IoLogoJavascript className="newI" style={{color: "yellow"}}/>
            ],
            image: quiz,
            description: `This is an application focused on teaching JavaScript while you have fun. 
                After finishing the quiz, it is possible to view your evaluation, which is rated from 0 to 100%. 
                If the user scores below 50%, they will automatically fail.
            `,
            link: "https://vuvufelix.github.io/Quiz-Javascript/"
        },
        {
            id: "5",
            name: "Lending page de agendamento",
            icons: [
                <FaHtml5  className="newI" style={{color: "red"}}/>,
                <SiCss3 className="newI" style={{color: "blue"}}/>,
                <IoLogoJavascript className="newI" style={{color: "yellow"}}/>
            ],
            image: agend,
            description: `This is an application, specifically a modern and responsive fictional 
                landing page that displays information about booking services in Angola and abroad.
            `,
            link: "https://vuvufelix.github.io/servi-o-de-agendamento/"
        },
        {
            id: "6",
            name: "Tela de login com autenticação",
            icons: [
                <FaHtml5  className="newI" style={{color: "red"}}/>,
                <SiCss3 className="newI" style={{color: "blue"}}/>,
                <IoLogoJavascript className="newI" style={{color: "yellow"}}/>
            ],
            image: login,
            description: `A modern web registration and login application developed to demonstrate secure user authentication. 
                The project uses Firebase Authentication to manage accounts, providing a fluid user experience and a robust backend 
                without the need for a custom server.
            `,
            link: "https://vuvufelix.github.io/Tela-de-login-com-autentica-o/"
        }
    ];

    function showDetails(project) {
        GlobalData.setShowModel(true);
        let projectFound = portfolioProjects.find((myProject) => myProject.id === project.id);
        GlobalData.setPortfolio(projectFound);
    }

    return (
        <main>

            <HomeContainer>
                <HomeContent />
                <img src={vuvu} alt="imagem vuvu félix" style={{height: "350px"}} className="my-img"/>
            </HomeContainer>

            <Carousel>
                <Group>
                    {iconCarousel.map(iconType => {
                        return iconType
                    })}
                </Group>
                <Group>
                    {iconCarousel.map(iconType => {
                        return iconType
                    })}
                </Group>
            </Carousel>

            <AboutContainer>
                <AboutContainerInfo>
                    <About 
                    image={build} 
                    p1={`
                        Olá! Sou o Félix, um apaixonado por tecnologia que, nos tempos livres, adora ir à academia. Desde 2023, 
                        mergulhei de cabeça no mundo do desenvolvimento de software, atuando como desenvolvedor front-end. 
                        De lá para cá, tenho me dedicado continuamente à busca por novos conhecimentos na área de TI, 
                        com especial interesse em desenvolvimento web e mobile. No desenvolvimento web, 
                        meus estudos e experiências se concentram no framework React.js,
                        enquanto no desenvolvimento mobile, foco no React Native.
                    `}
                    p2={`
                        Atualmente presto serviços com a Huber Cargas Express, uma startup que conecta motoristas e 
                        produtores através de um sistema digital de fretes. Atuo no desenvolvimento da aplicação, 
                        desde a interface do usuário até a lógica do servidor, utilizando JavaScript, React, Node.js e MySQL. 
                        O objetivo é criar uma plataforma ágil, segura e intuitiva para otimizar o transporte de cargas.
                    `}
                />
                </AboutContainerInfo>
            </AboutContainer>

            <SkillContainer>
                <SkillContainerSection>
                    {skillsArray.map((skill, index) => {
                        return (
                            <div key={index} className="skill">
                                {skill.icon}
                                <span>{skill.name}</span>
                                <span className="leavel">{skill.leavel}</span>
                            </div>
                        )
                    })}
                </SkillContainerSection>
            </SkillContainer>

            <PortfolioContainer>
                <PortfolioContainerProjects>
                    {portfolioProjects.map((project, index) => {
                        return (
                            <div className="project" key={index}>
                                <div className="project-icons">
                                    {project.icons.map(icon => icon)}
                                </div>
                                <div className="project-image" onClick={() => showDetails(project)}>
                                    <img src={project.image} alt={project.name} />
                                </div>
                                <span>{project.name}</span>
                            </div>
                        )
                    })}
                </PortfolioContainerProjects>
            </PortfolioContainer>

            <ContactContainer>
                <ContactInfo>
                    <OtherContacts />
                    <FormContainer />
                </ContactInfo>
            </ContactContainer>
        </main>
    )
}

export default Main