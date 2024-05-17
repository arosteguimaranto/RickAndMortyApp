import { useState, useEffect } from "react";
import { Location } from "../types";

const useFavoritesLocations = () => {
	const [favorites, setFavorites] = useState<Location[]>(() => {
		const storedFavorites = localStorage.getItem("favorites-locations");
		return storedFavorites ? JSON.parse(storedFavorites) : [];
	});

	const toggleFavorite = (location: Location) => {
		const index = favorites.findIndex((fav) => fav.id === location.id);
		if (index === -1) {
			setFavorites([...favorites, location]);
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
			"favorites-characters",
			JSON.stringify(updatedFavorites)
		);
	};

	useEffect(() => {
		localStorage.setItem("favorites-locations", JSON.stringify(favorites));
	}, [favorites]);

	return { favorites, toggleFavorite, removeFavorite };
};

export default useFavoritesLocations;
