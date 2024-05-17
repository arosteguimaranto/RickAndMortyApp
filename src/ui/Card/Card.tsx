import React from 'react'
import { Character } from '../../types/characters'
import './style.css'


interface CharacterCardProps { character: Character, isFavorite: boolean, onToggleFavorite: () => void }

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, isFavorite, onToggleFavorite }) => {

	const handleToggleFavorite = () => {
    onToggleFavorite();
  };

	return (
		<div className="character-card">
			<h2 className="character-name">{character.name}</h2>
			<img className="character-image" src={character.image} alt={character.name} />
			<p className='character-p'>{character.species}</p>
			<p className='character-p'>{character.status}</p>
			<div>
			<button className='button-fav' onClick={handleToggleFavorite}>{isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}</button>
			</div>
		</div>
	)
};
