import "./portfolioContainer.css";

const PortfolioContainer = ({ children }) => {
    return (
        <section className="portfolio-container">
            <h2>Portfolio<span style={{color: "skyblue"}}> .</span></h2>
            { children }
        </section>
    )
}

export default PortfolioContainer;