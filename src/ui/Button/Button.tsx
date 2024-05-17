import React from "react";
import "./styles.css";

interface ButtonProps {
	onClick: () => void;
	children: React.ReactNode;
	type?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = "btn" }) => {
	return (
		<div className="characters-div">
			<button
				className={type === "btn" ? "button-characters" : "topbar"}
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
