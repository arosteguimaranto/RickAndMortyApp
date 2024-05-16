import React from 'react';
import './style.css';

const Form = () => {
  return (
    <form className="form-container">
      <div className="form-group">
        <label htmlFor="email" className="form-label">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          required
        />
      </div>
      <button type="submit" className="form-button">Iniciar Sesión</button>
    </form>
  );
};

export default Form;
