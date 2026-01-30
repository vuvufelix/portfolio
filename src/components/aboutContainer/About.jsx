import "./aboutContainerInfo.css";

const About = ({ image,  p1, p2}) => {
    return (
        <>
            <img src={image} alt="" className="image-about"/>
            <article className="about-content">
                <p>
                    {p1}
                </p>
                <p>
                    {p2}
                </p>
            </article>
        </>
    )
}

export default About;