import "./contactContainer.css";

const ContactContainer = ({ children }) => {
    return (
        <section className="contact-container">
            <h2>Contact<span style={{color: "skyblue"}}> .</span></h2>
            { children }
        </section>
    )
}

export default ContactContainer;