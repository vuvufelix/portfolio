import "./model.css";
import quiz from "../../assets/quiz.jpg";
import { useContext } from "react";
import GlobalContext from "../../context/globalContext";

const Model = () => {

  const GlobalData = useContext(GlobalContext);

  function closeModel() {
    GlobalData.setShowModel(false);
  }

  return (
    <div className="model-container">
      <section className="model-details">
        <span className="goOut" onClick={() => closeModel()}>x</span>
        <div className="info-details">
          <span>HairDay</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, repudiandae fugit tempore qui corporis labore maiores animi architecto rem? Alias laborum natus enim! Alias soluta perspiciatis sequi quasi odit iure?
          </p>
        </div>
        <div className="getInOnSite">
          <img src={quiz} alt="imagem do projeto" />
          <button>Acessar o Projeto</button>
        </div>
      </section>
    </div>
  )
}

export default Model