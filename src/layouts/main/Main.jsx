import "./Main.css";
import "./aboutContainer.css";
import "./skills.css";
import "./portfolio.css";
import "./contact.css";

import vuvu from "../../assets/vuvu2.png";
import build from "../../assets/build.webp";
import imageProject1 from "../../assets/imagemProject.png";
import neneth from "../../assets/nenet.png";
import ferMovie from "../../assets/ferMovie.png";
import quiz from "../../assets/quiz.jpg";
import agend from "../../assets/agendamento.png";
import login from "../../assets/login.png";

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
import { FaDownload } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa6";
import { RiToolsFill } from "react-icons/ri";
import { AiFillDatabase } from "react-icons/ai";
import { FaBolt } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

import { useContext } from "react";
import GlobalContext from "../../context/globalContext";

const Main = () => {

    const GlobalData = useContext(GlobalContext);

    function showDetails() {
        GlobalData.setShowModel(true);
    }

    return (
        <main>
            <section className="Home-container">
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
                <img src={vuvu} alt="imagem vuvu félix" style={{height: "350px"}}/>
            </section>

            <div className="carousel">
                <div className="group">
                    <IoLogoJavascript className="card"/>
                    <FaHtml5 className="card"/>
                    <SiCss3 className="card"/>
                    <RiReactjsLine className="card"/>
                    <FaGitAlt className="card"/>
                    <FaGithub className="card"/>
                    <FaNode className="card"/>
                    <RiTailwindCssFill className="card"/>
                    <SiExpress className="card"/>
                    <TbBrandReactNative className="card"/>
                    <SiTypescript className="card"/>
                    <SiMysql className="card"/>
                </div>
                <div className="group">
                    <IoLogoJavascript className="card" />
                    <FaHtml5 className="card"/>
                    <SiCss3 className="card"/>
                    <RiReactjsLine className="card"/>
                    <FaGitAlt className="card"/>
                    <FaGithub className="card"/>
                    <FaNode className="card"/>
                    <RiTailwindCssFill className="card"/>
                    <SiExpress className="card"/>
                    <TbBrandReactNative className="card"/>
                    <SiTypescript className="card"/>
                    <SiMysql className="card"/>
                </div>
            </div>

            <section className="about-container">
                <h2>About<span style={{color: "skyblue"}}> .</span></h2>
                <div className="about-container-info">
                    <img src={build} alt="" className="image-about"/>
                    <article className="about-content">
                        <p>
                            Olá! Sou o Félix, um apaixonado por tecnologia que, nos tempos livres, adora ir à academia. Desde 2023, mergulhei de cabeça no mundo do desenvolvimento de software, atuando como desenvolvedor front-end. De lá para cá, tenho me dedicado continuamente à busca por novos conhecimentos na área de TI, com especial interesse em desenvolvimento web e mobile. No desenvolvimento web, meus estudos e experiências se concentram no framework React.js, enquanto no desenvolvimento mobile, foco no React Native.
                        </p>
                        <p>
                            Atualmente presto serviços com a Huber Cargas Express, uma startup que conecta motoristas e produtores através de um sistema digital de fretes. Atuo no desenvolvimento da aplicação, desde a interface do usuário até a lógica do servidor, utilizando JavaScript, React, Node.js e MySQL. O objetivo é criar uma plataforma ágil, segura e intuitiva para otimizar o transporte de cargas.
                        </p>
                    </article>
                </div>
            </section>

            <section className="skills-container">
                <h2>Skills<span style={{color: "skyblue"}}> .</span></h2>
                <p>Tecnologias com as quais trabalho para criar soluções digitais modernas.</p>
                <div>
                    <span>Frontend <FaBolt style={{color: "orange"}}/> </span>
                    <span>Backend <AiFillDatabase style={{color: "green"}}/> </span>
                    <span>Databases <FaDatabase style={{color: "yellow"}}/> </span>
                    <span>Ferramentas <RiToolsFill style={{color: "gren"}}/> </span>
                </div>

                <section className="skills-container-section">
                    <div className="skill">
                        <RiReactjsLine style={{fontSize: "2.5rem", color: "skyblue"}}/>
                        <span>React js</span>
                        <span className="leavel">Intermediário</span>
                    </div>
                    <div className="skill">
                        <SiTypescript style={{fontSize: "2.5rem", color: "blue"}}/>
                        <span>TypeScript</span>
                        <span className="leavel">Intermediário</span>
                    </div>
                    <div className="skill">
                        <FaHtml5 style={{fontSize: "2.5rem", color: "red"}}/>
                        <span>HTML5</span>
                        <span className="leavel">Avançado</span>
                    </div>
                    <div className="skill">
                        <SiCss3 style={{fontSize: "2.5rem", color: "blue"}}/>
                        <span>CSS3</span>
                        <span className="leavel">Avançado</span>
                    </div>
                    <div className="skill">
                        <TbBrandReactNative style={{fontSize: "2.5rem", color: "blue"}}/>
                        <span>React Native</span>
                        <span className="leavel">Intermediário</span>
                    </div>
                    <div className="skill">
                        <IoLogoJavascript style={{fontSize: "2.5rem", color: "yellow"}}/>
                        <span>JavaScript</span>
                        <span className="leavel">Intermediário</span>
                    </div>
                    <div className="skill">
                        <GrMysql style={{fontSize: "2.5rem", color: "blue"}}/>
                        <span>MySQL</span>
                        <span className="leavel">Intermediário</span>
                    </div>
                    <div className="skill">
                        <FaNode style={{fontSize: "2.5rem", color: "green"}}/>
                        <span>Node.js</span>
                        <span className="leavel">Intermediário</span>
                    </div>
                    <div className="skill">
                        <SiExpress style={{fontSize: "2.5rem", color: "black"}}/>
                        <span>Express.js</span>
                        <span className="leavel">Intermediário</span>
                    </div>
                    <div className="skill">
                        <FaGitAlt style={{fontSize: "2.5rem", color: "red"}}/>
                        <span>Git</span>
                        <span className="leavel">Avançado</span>
                    </div>
                    <div className="skill">
                        <RiTailwindCssFill style={{fontSize: "2.5rem", color: "skyblue"}}/>
                        <span>Tailwind CSS</span>
                        <span className="leavel">Intermediário</span>
                    </div>
                    <div className="skill">
                        <FaGithub style={{fontSize: "2.5rem", color: "black"}}/>
                        <span>GitHub</span>
                        <span className="leavel">Avançado</span>
                    </div>
                </section>
            </section>

            <section className="portfolio-container">
                <h2>Portfolio<span style={{color: "skyblue"}}> .</span></h2>
                <div className="portfolio-container-projects">
                    <div className="project">
                        <div className="project-icons">
                            <FaNode className="newI" style={{ color: "green"}}/>
                            <SiCss3 className="newI" style={{color: "blue"}}/>
                            <IoLogoJavascript className="newI" style={{color: "yellow"}}/>
                            <RiReactjsLine className="newI" style={{color: "skyblue"}}/>
                        </div>
                        <div className="project-image" onClick={() => showDetails()}>
                            <img src={neneth} alt="imagem do projeto" />
                        </div>
                        <span>Neneth</span>
                    </div>

                    <div className="project">
                        <div className="project-icons">
                            <SiCss3 className="newI" style={{color: "blue"}}/>
                            <IoLogoJavascript className="newI" style={{color: "yellow"}}/>
                            <RiReactjsLine className="newI" style={{color: "skyblue"}}/>
                        </div>
                        <div className="project-image">
                            <img src={imageProject1} alt="imagem do projeto" />
                        </div>
                        <span>HairDay</span>
                    </div>

                    <div className="project">
                        <div className="project-icons">
                            <SiCss3 className="newI" style={{color: "blue"}}/>
                            <IoLogoJavascript className="newI" style={{color: "yellow"}}/>
                            <RiReactjsLine className="newI" style={{color: "skyblue"}}/>
                        </div>
                        <div className="project-image">
                            <img src={ferMovie} alt="imagem do projeto" />
                        </div>
                        <span>FerMovie</span>
                    </div>

                    <div className="project">
                        <div className="project-icons">
                            <FaHtml5  className="newI" style={{color: "red"}}/>
                            <SiCss3 className="newI" style={{color: "blue"}}/>
                            <IoLogoJavascript className="newI" style={{color: "yellow"}}/>
                        </div>
                        <div className="project-image">
                            <img src={quiz} alt="imagem do projeto" />
                        </div>
                        <span>Quiz javaScript</span>
                    </div>

                    <div className="project">
                        <div className="project-icons">
                            <FaHtml5  className="newI" style={{color: "red"}}/>
                            <SiCss3 className="newI" style={{color: "blue"}}/>
                            <IoLogoJavascript className="newI" style={{color: "yellow"}}/>
                        </div>
                        <div className="project-image">
                            <img src={agend} alt="imagem do projeto" />
                        </div>
                        <span>Lending page de agendamento</span>
                    </div>

                    <div className="project">
                        <div className="project-icons">
                            <FaHtml5  className="newI" style={{color: "red"}}/>
                            <SiCss3 className="newI" style={{color: "blue"}}/>
                            <IoLogoJavascript className="newI" style={{color: "yellow"}}/>
                        </div>
                        <div className="project-image">
                            <img src={login} alt="imagem do projeto" />
                        </div>
                        <span>Tela de login com autenticação</span>
                    </div>
                </div>
            </section>
            <section className="contact-container">
                <h2>Contact<span style={{color: "skyblue"}}> .</span></h2>
                <div className="contact-info">
                    <div className="other-contacts">
                        <span>Conecte-se comigo</span>
                        <p>
                            Estou disponível para novos projetos e colaborações. Sinta-se avontade para me enviar uma mensagem.
                        </p>
                        <div className="contacts">
                            <MdEmail className="icon"/>
                            <div className="my-contacts">
                                <span>Email</span>
                                <a href="#">vuvufelix2018@gmail.com</a>
                            </div>
                        </div>

                        <div className="contacts">
                            <BsFillTelephoneFill className="icon"/>
                            <div className="my-contacts">
                                <span>Telefone</span>
                                <a href="#">929442549</a>
                            </div>
                        </div>

                        <div className="contacts">
                            <BsLinkedin className="icon"/>
                            <div className="my-contacts">
                                <span>LinkedIn</span>
                                <a href="#">Vuvu Félix</a>
                            </div>
                        </div>
                    </div>
                    <form className="container-form">
                        <div className="form-line">
                            <div>
                                <label htmlFor="name">Nome</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" />
                            </div>
                        </div>
                        <div className="form-lines">
                            <label htmlFor="summary">Assunto</label>
                            <input type="text" name="summary" id="summary" />
                        </div>
                        <div className="form-lines">
                            <label htmlFor="sms">Mensagem</label>
                            <textarea name="sms" id="sms"></textarea>
                        </div>
                        <button>Enviar Mensagem</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Main