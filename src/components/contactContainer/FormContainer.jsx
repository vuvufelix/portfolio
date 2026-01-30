import "./formContainer.css";

const FormContainer = () => {
    return (
        <form className="container-form">
            <div className="form-line">
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                </div>
            </div>
            <div className="form-lines">
                <label htmlFor="summary">Assunto</label>
                <input type="text" name="summary" id="summary" />
            </div>
            <div className="form-lines">
                <label htmlFor="sms">Mensagem</label>
                <textarea name="sms" id="sms"></textarea>
            </div>
            <button>Enviar Mensagem</button>
        </form>
    )
}

export default FormContainer;