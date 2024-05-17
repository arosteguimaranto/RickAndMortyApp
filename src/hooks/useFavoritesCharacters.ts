import { useState, useEffect } from "react";
import { Character } from "../types";

const useFavoritesCharacters = () => {
	const [favorites, setFavorites] = useState<Character[]>(() => {
		const storedFavorites = localStorage.getItem("favorites-characters");
		return storedFavorites ? JSON.parse(storedFavorites) : [];
	});

	const toggleFavorite = (character: Character) => {
		const index = favorites.findIndex((fav) => fav.id === character.id);
		if (index === -1) {
			setFavorites([...favorites, character]);
		} else {
			const updatedFavorites = [...favorites];
			updatedFavorites.splice(index, 1);
			setFavorites(updatedFavorites);
		}
	};

	const removeFavorite = (id: number) => {
		const updatedFavorites = favorites.filter((fav) => fav.id !== id);
		setFavorites(updatedFavorites);
		localStorage.setItem(
			"favorites-locations",
			JSON.stringify(updatedFavorites)
		);
	};

	useEffect(() => {
		localStorage.setItem("favorites-characters", JSON.stringify(favorites));
	}, [favorites]);

	return { favorites, toggleFavorite, removeFavorite };
};

export default useFavoritesCharacters;
