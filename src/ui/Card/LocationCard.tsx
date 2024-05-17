import React, { useEffect, useState } from "react";
import { Location } from "../../types";
import "./style.css";

interface LocationCardProps {
	location: Location;
	// isFavorite: boolean;
	// onToggleFavorite: () => void;
}

export const LocationCard: React.FC<LocationCardProps> = ({
	location,
	// isFavorite,
	// onToggleFavorite,
}) => {
	// const handleToggleFavorite = () => {
	// 	onToggleFavorite();
	// };

	console.log(location)

	return (
		<div className="card location">
			 <h2 className="card-name">Nombre: {location.name}</h2>
			<p className='card-p'>Tipo: {location.type}</p>
			<p className='card-p'>Dimension: {location.dimension}</p>
			<div>
				{/* <button className='button-fav' onClick={handleToggleFavorite}>{isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}</button> */}
			</div>
		</div>
	);
};
