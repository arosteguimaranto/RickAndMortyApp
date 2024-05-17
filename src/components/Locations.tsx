import React from 'react'
import { useRickAndMortyContext } from '../context/charactersContext';
import useFavorites from '../hooks/useFavorites';
import Button from '../ui/Button/Button';
import { LocationCard } from '../ui/Card/LocationCard';
import { useLocationContext } from '../context/locationContext';

export const Locations = () => {

	const { loading, locations, error } = useLocationContext();
	const { favorites, toggleFavorite } = useFavorites();

	if (loading)
		return (
			<div className="loading">
				<h1>Cargando...</h1>
			</div>
		);

	if (error)
		return (
			<div className="error">
				<h1>Hubo un error</h1>
			</div>
		);


  return (
		<div>
			<h1 className="title">Ubicaciones de Rick and Morty</h1>
			<div className="list">
				{locations.map((location) => (
					<LocationCard
						key={location.id}
						location={location}
						// isFavorite={favorites.some(
						// 	(favorite) => favorite.id === character.id
						// )}
						// onToggleFavorite={() => toggleFavorite(character)}
					/>
				))}
			</div>
			{/* <Button onClick={goToNextPage} /> */}
		</div>
  )
}
