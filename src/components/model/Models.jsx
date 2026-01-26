import "./model.css";
import quiz from "../../assets/quiz.jpg";

const Model = () => {
    return (
      <div className="model-container">
        <section className="model-details">
          <span className="goOut">x</span>
          <div className="info-details">
            <span>Nome do projeto</span>
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