import React, { FormEvent, useState } from "react";
import "./style.css";
import { useAuthContext } from "../../context/authContext";

const Form = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { logIn } = useAuthContext();

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const user = { email, password };
		logIn(user);
	};

	return (
		<div className="contenedor">
			<div className="formulario">
				<h1>Iniciar Sesion</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">Correo electrónico:</label>
					<input
						value={email}
						onChange={handleEmailChange}
						type="email"
						id="email"
						name="email"
						placeholder="Introduce tu correo electrónico"
					/>
					<label htmlFor="password">Contraseña:</label>
					<input
						value={password}
						onChange={handlePasswordChange}
						type="password"
						id="password"
						name="password"
						placeholder="Introduce tu contraseña"
					/>
					<label htmlFor="remember_me">Recordarme</label>
					<input type="checkbox" id="remember_me" name="remember_me" />
					<button className="button-form" type="submit">
						Iniciar sesión
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
