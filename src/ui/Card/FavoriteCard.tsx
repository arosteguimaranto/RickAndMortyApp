import React from "react";
import { Character, Location } from "../../types";
import "./style.css";

interface FavoriteCardProps {
	item: Character | Location & { uniqueKey: string };
	onRemoveFavorite: () => void;
}

export const FavoriteCard: React.FC<FavoriteCardProps> = ({
	item,
	onRemoveFavorite,
}) => {
	const isCharacter = (item: any): item is Character => "species" in item;

	return (
		<div className="card favorite">
			<h2 className="card-name">Nombre: {item.name}</h2>
			{isCharacter(item) ? (
				<>
					<img className="card-image" src={item.image} alt={item.name} />
					<p className="card-p">Especie: {item.species}</p>
					<p className="card-p">Género: {item.status}</p>
				</>
			) : (
				<>
					<p className="card-p">Tipo: {item.type}</p>
					<p className="card-p">Dimensión: {item.dimension}</p>
				</>
			)}
			<button className="button-fav" onClick={onRemoveFavorite}>
				Quitar de Favoritos
			</button>
		</div>
	);
};
