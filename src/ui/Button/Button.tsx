import React from "react";
import "./styles.css";

interface ButtonProps {
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
	return (
		<div className="characters-div">
			<button className="button-characters" onClick={onClick}>
				Cargar mas
			</button>
		</div>
	);
};

export default Button;
