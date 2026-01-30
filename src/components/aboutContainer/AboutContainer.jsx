import "./aboutContainer.css";

const AboutContainer = ({ children }) => {
    return (
        <section className="about-container">
            <h2>About<span style={{color: "skyblue"}}> .</span></h2>
            { children }
        </section>
    )
}

export default AboutContainer;