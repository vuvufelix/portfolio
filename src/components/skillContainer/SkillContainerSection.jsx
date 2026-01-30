import "./skillContainerSection.css";

const SkillContainerSection = ({ children }) => {
    return (
        <section className="skills-container-section">
            { children }
        </section>
    )
}

export default SkillContainerSection;