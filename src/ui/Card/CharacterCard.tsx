import React from "react";
import { Character } from "../../types";
import "./style.css";

interface CharacterCardProps {
	character: Character;
	isFavorite: boolean;
	onToggleFavorite: () => void;
	isVisible: boolean;
	redirect: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
	character,
	isFavorite,
	onToggleFavorite,
	isVisible,
	redirect,
}) => {
	const handleToggleFavorite = () => {
		onToggleFavorite();
	};

	return (
		<div className="card">
			<h2 className="card-name">{character.name}</h2>
			<img className="card-image" src={character.image} alt={character.name} />
			<p className="card-p">{character.species}</p>
			<p className="card-p">{character.status}</p>
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
