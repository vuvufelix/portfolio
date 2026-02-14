import SpaceBackground from "./components/SpaceBackground";
import Header from "./layouts/header/Header.jsx";
import Main from "./layouts/main/Main.jsx";
import Models from "./components/model/Models.jsx";
import Footer from "./layouts/footer/Footer.jsx";

import { useState, useRef } from "react";
import { useContext } from "react";
import GlobalContext from "./context/globalContext.jsx";

import "./App.css";
import "./index.css";

function App() {

  const [menu, setMenu] = useState("Home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const GlobalData = useContext(GlobalContext);

  const optionsMenu = [
    {nav: "Home", scroll: GlobalData.homeRef},
    {nav: "About", scroll: GlobalData.aboutRef},
    {nav: "Skills", scroll: GlobalData.skillsRef},
    {nav: "Portfolio", scroll: GlobalData.portfolioRef},
    {nav: "Contact", scroll: GlobalData.contactRef},
  ]

  const scrollToSection = (elementRef, menuItem) => {
    setMenu(menuItem)
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App" style={{ position: "relative", zIndex: 1, color: "white"}}>
      <SpaceBackground />
      
      {/* O conteúdo do seu portfólio vem aqui */}
      <div className="content" style={{ position: "relative", zIndex: 1, color: "white"}}>
        <Header>
          <div>
            <div className="title-container">
              <h1>Dev<strong>Félix{"/>"} </strong></h1>
            </div>
            <div className="menu-container">
              {optionsMenu.map((menuItem, index) => {
                return (
                  <button 
                    key={ index } 
                    className={menuItem.nav === menu ? "active" : ""}  
                    onClick={() => scrollToSection(menuItem.scroll, menuItem.nav)} 
                  >
                    { menuItem.nav }
                  </button>
                )
              })}
            </div>
          </div>
        </Header>
        <Main/>
        {GlobalData.showModel && <Models/> }
        <Footer />
      </div>
    </div>
  );
}

export default App

/*
npm install @tsparticles/react @tsparticles/engine tsparticles-slim
*/