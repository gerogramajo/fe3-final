import React, { useState } from 'react';
import '../Css/Contacto.css';
import { useTheme } from '../Context/ThemeContext';
import Form from '../Components/Form';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contacto = () => {
  const { themeState } = useTheme();

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

    if (formData.fullName.length < 5 || !formData.email.includes('@')) {
      setErrorMessage('Por favor, verifique su información nuevamente.');
      return;
    }

    console.log('Datos enviados:', formData);

    setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail.`);
  };

  return (
    <div className={`contacto-container ${themeState.isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Navbar></Navbar>
      <h1 style={{ paddingBottom: 50 }}>Contacto</h1>
      <Form formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <Footer></Footer>
    </div>
  );
};

export default Contacto;