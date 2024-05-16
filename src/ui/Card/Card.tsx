import React from 'react'
import { Character } from '../../types/characters'
import './style.css'
import Button from '../Button/Button';

interface CharacterCardProps { character: Character, isFavorite: boolean, onToggleFavorite: () => void }

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, isFavorite, onToggleFavorite }) => {

	const handleToggleFavorite = () => {
    onToggleFavorite();
  };

	return (
		<div className="character-card">
			<h2 className="character-name">{character.name}</h2>
			<img className="character-image" src={character.image} alt={character.name} />
			<button onClick={handleToggleFavorite}>{isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}</button>
		</div>
	)
};
