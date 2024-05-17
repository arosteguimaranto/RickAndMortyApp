import React from "react";
import { Location } from "../../types";
import "./style.css";

interface LocationCardProps {
	location: Location;
	isFavorite: boolean;
	onToggleFavorite: () => void;
	isVisible: boolean;
	redirect: () => void;

}

export const LocationCard: React.FC<LocationCardProps> = ({
	location,
	isFavorite,
	onToggleFavorite,
	isVisible,
	redirect,
}) => {
	const handleToggleFavorite = () => {
		onToggleFavorite();
	};

	return (
		<div className="card location">
			<h2 className="card-name">Nombre: {location.name}</h2>
			<p className="card-p">Tipo: {location.type}</p>
			<p className="card-p">Dimension: {location.dimension}</p>
			{isVisible ? (
				<div>
					<button className="button-fav" onClick={handleToggleFavorite}>
						{isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
					</button>
				</div>
			) : (
				<button className="button-fav" onClick={redirect}>
					Inicia sesión para agregar a favoritos
				</button>
			)}
		</div>
	);
};
