import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useRickAndMortyContext } from "../context/charactersContext";
import useFavorites from "../hooks/useFavoritesCharacters";
import Button from "../ui/Button/Button";
import { CharacterCard } from "../ui/Card/CharacterCard";

const Home = () => {
	const { loading, characters, error, goToNextPage } = useRickAndMortyContext();
	const { user } = useAuthContext()
	const { favorites, toggleFavorite } = useFavorites();
	const navigate = useNavigate()

	const isAuthenticated = !!user

	const redirectToLogin = () => {
		navigate('/login')
	}

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
						isVisible={isAuthenticated}
						redirect={redirectToLogin}
					/>
				))}
			</div>
				<div className="div-button-more">
				<Button onClick={goToNextPage}>Cargar mas</Button>
				</div>
		</div>

	);
};

export default Home;
