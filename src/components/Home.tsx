import { useRickAndMortyContext } from "../context/charactersContext";
import useFavorites from "../hooks/useFavoritesCharacters";
import Button from "../ui/Button/Button";
import { CharacterCard } from "../ui/Card/CharacterCard";

const Home = () => {
	const { loading, characters, error, goToNextPage } = useRickAndMortyContext();
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
			<h1 className="title">Personajes de Rick and Morty</h1>
			<div className="list">
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
			<Button onClick={goToNextPage} />
		</div>

	);
};

export default Home;
