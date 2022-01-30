import { useState } from "react";
import {Link} from "react-router-dom";

const ContactoPage = () => {
  
  const [enviado, setEnviado] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setEnviado(true);
    }, 100);
  };

  if (enviado) {
    return (
      <div>Consulta enviada.<br/>
        <Link to="/">Ir al inicio</Link>
      </div>
    );
  }

  return (
    <div className="contacto">
      <p>Antes de escribir, por favor lea las <Link to="/preguntas-frecuentes">preguntas frecuentes</Link></p>

      <form action="contacto" onSubmit={handleSubmit} method="POST">
        <h1>Formulario de Contacto</h1>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input name="nombre" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="consulta">Consulta:</label>
          <textarea name="consulta" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactoPage;
