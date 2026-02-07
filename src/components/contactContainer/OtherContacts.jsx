import "./otherContacts.css";

import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const OtherContacts = () => {
    return (
        <div className="other-contacts">
            <span>Conecte-se comigo</span>
            <p>
                Estou disponível para novos projetos e colaborações. Sinta-se avontade para me enviar uma mensagem.
            </p>
            <div className="contacts">
                <MdEmail className="icon"/>
                <div className="my-contacts">
                    <span>Email</span>
                    <a href="mailto:vuvufelix2018@gmail.com">vuvufelix2018@gmail.com</a>
                </div>
            </div>
        
            <div className="contacts">
                <BsFillTelephoneFill className="icon"/>
                <div className="my-contacts">
                    <span>Telefone</span>
                    <a href="tel:+244929442549">929442549</a>
                </div>
            </div>
        
            <div className="contacts">
                <BsLinkedin className="icon"/>
                <div className="my-contacts">
                    <span>LinkedIn</span>
                    <a href="https://www.linkedin.com/in/vuvu-f%C3%A9lix-6a09a42a3/" target="_blank" rel="external">Vuvu Félix</a>
                </div>
            </div>
        </div>
    )
}

export default OtherContacts;