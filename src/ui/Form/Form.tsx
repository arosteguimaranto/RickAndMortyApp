import React from 'react';
import './style.css';

const Form = () => {
  return (
		<div className="contenedor">
		<div className="formulario">
			<h1>Iniciar Sesion</h1>
			<form>
				<label htmlFor="email">Correo electrónico:</label>
				<input type="email" id="email" name="email" placeholder="Introduce tu correo electrónico" />
				<label htmlFor="password">Contraseña:</label>
				<input type="password" id="password" name="password" placeholder="Introduce tu contraseña" />
				<label htmlFor="remember_me">Recordarme</label>
				<input type="checkbox" id="remember_me" name="remember_me" />
				<button className='button-form' type="submit">Iniciar sesión</button>
			</form>
		</div>
	</div>
  );
};

export default Form;
