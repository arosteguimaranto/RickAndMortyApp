import { LocationCard } from '../ui/Card/LocationCard';
import { useLocationContext } from '../context/locationContext';
import useFavoritesLocations from '../hooks/useFavoritesLocations';
import Button from '../ui/Button/Button';

export const Locations = () => {

	const { loading, locations, error, goToNextPage } = useLocationContext();
	const { favorites, toggleFavorite } = useFavoritesLocations();

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
						 isFavorite={favorites.some(
					 	(favorite) => favorite.id === location.id
						 )}
						 onToggleFavorite={() => toggleFavorite(location)}
					/>
				))}
			</div>
			 <Button onClick={goToNextPage} />
		</div>
  )
}
