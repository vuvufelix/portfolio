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
                    <a href="#">vuvufelix2018@gmail.com</a>
                </div>
            </div>
        
            <div className="contacts">
                <BsFillTelephoneFill className="icon"/>
                <div className="my-contacts">
                    <span>Telefone</span>
                    <a href="#">929442549</a>
                </div>
            </div>
        
            <div className="contacts">
                <BsLinkedin className="icon"/>
                <div className="my-contacts">
                    <span>LinkedIn</span>
                    <a href="#">Vuvu Félix</a>
                </div>
            </div>
        </div>
    )
}

export default OtherContacts;