import "./homeContainer.css";

const HomeContainer = ({ children }) => {
    return (
        <section className="Home-container">
            { children }
        </section>
    )
}

export default HomeContainer;