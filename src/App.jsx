import SpaceBackground from "./components/SpaceBackground";
import Header from "./layouts/header/Header.jsx";
import Main from "./layouts/main/Main.jsx";
import Models from "./components/model/Models.jsx";
import Footer from "./layouts/footer/Footer.jsx";

import { useState } from "react";
import { useContext } from "react";
import GlobalContext from "./context/globalContext.jsx";

import "./App.css";
import "./index.css";

function App() {

  const [menu, setMenu] = useState("Home");

  const GlobalData = useContext(GlobalContext);

  const optionsMenu = ["Home", "About", "Skills", "Portfolio", "Contact"];

  return (
    <div className="App" style={{ position: "relative", zIndex: 1, color: "white"}}>
      <SpaceBackground />
      
      {/* O conteúdo do seu portfólio vem aqui */}
      <div className="content" style={{ position: "relative", zIndex: 1, color: "white"}}>
        <Header>
          <div className="title-container">
            <h1>Dev<strong>Félix{"/>"} </strong></h1>
          </div>
          <div className="menu-container">
            {optionsMenu.map((menuItem, index) => {
              return <a key={ index } className={menuItem === menu ? "active" : ""}  onClick={() => setMenu(menuItem)} href="#">{ menuItem }</a>
            })}
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