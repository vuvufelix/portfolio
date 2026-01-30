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
          <span>{GlobalData.portfolio.name}</span>
          <p>
            {GlobalData.portfolio.description}
          </p>
        </div>
        <div className="getInOnSite">
          <img src={GlobalData.portfolio.image} alt={GlobalData.portfolio.name} />
          <a href={GlobalData.portfolio.link} target="_blank" rel="external">Ver Projeto</a>
        </div>
      </section>
    </div>
  )
}

export default Model