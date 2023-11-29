import React from 'react';

const Form = ({ formData, onChange, onSubmit }) => {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="input-group">
        <label className="label">Nombre completo:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          className="input"
        />
      </div>
      <div className="input-group">
        <label className="label">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className="input"
        />
      </div>
      <button type="submit" className="submit-button">
        Enviar
      </button>
    </form>
  );
};

export default Form;