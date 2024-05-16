import { useRickAndMortyContext } from "../context/charactersContext";
import useFavorites from "../hooks/useFavorites";
import Button from "../ui/Button/Button";
import { CharacterCard } from "../ui/Card/Card";

const Home = () => {
	const { loading, characters, error, pagination } = useRickAndMortyContext();
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
			<h1>Personajes de Rick and Morty</h1>
			<div className="character-list">
				{characters.map((character) => (
					<CharacterCard
						key={character.id}
						character={character}
						isFavorite={favorites.some(
							(favorite) => favorite.id === character.id
						)}
						onToggleFavorite={() => toggleFavorite(character)}
					/>
				))}
			</div>
			<Button/>
		</div>
	);
};

export default Home;
