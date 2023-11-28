import React, { useState } from 'react';
import '../Css/Contacto.css'; // Importa tus estilos

const Contacto = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.fullName.length < 5 || !formData.email.includes('@')) {
      setErrorMessage('Por favor, verifique su información nuevamente.');
      return;
    }

    // Simulando el envío de datos
    console.log('Datos enviados:', formData);

    setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail.`);
  };

  return (
    <div className="contacto-container">
      <h1 style={{paddingBottom: 50}}>Contacto</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label">Nombre completo:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Contacto;