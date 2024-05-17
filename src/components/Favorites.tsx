import React, { useEffect, useState } from "react";
import useFavoritesCharacters from "../hooks/useFavoritesCharacters";
import useFavoritesLocations from "../hooks/useFavoritesLocations";
import { Character, Location } from "../types";
import { FavoriteCard } from "../ui/Card/FavoriteCard";

export const Favorites = () => {
	const {
		favorites: initialFavoritesCharacters,
		removeFavorite: removeCharacterFavorite,
	} = useFavoritesCharacters();
	const {
		favorites: initialFavoritesLocations,
		removeFavorite: removeLocationFavorite,
	} = useFavoritesLocations();

	const [favoritesCharacters, setFavoritesCharacters] = useState<Character[]>(
		initialFavoritesCharacters
	);
	const [favoritesLocations, setFavoritesLocations] = useState<Location[]>(
		initialFavoritesLocations
	);

	useEffect(() => {
		setFavoritesCharacters(initialFavoritesCharacters);
		setFavoritesLocations(initialFavoritesLocations);
	}, [initialFavoritesCharacters, initialFavoritesLocations]);

	const mergedFavorites: (Character | Location & { uniqueKey: string })[] = [
		...favoritesCharacters.map((char) => ({
			...char,
			uniqueKey: `character-${char.id}`,
		})),
		...favoritesLocations.map((loc) => ({
			...loc,
			uniqueKey: `location-${loc.id}`,
		})),
	];

	const handleRemoveFavorite = (uniqueKey: string | undefined) => {
		if (uniqueKey) {
			const [type, idString] = uniqueKey.split("-");
			const id = parseInt(idString);
			if (type === "character") {
				removeCharacterFavorite(id);
				setFavoritesCharacters(
					favoritesCharacters.filter((char) => char.id !== id)
				);
			} else {
				removeLocationFavorite(id);
				setFavoritesLocations(favoritesLocations.filter((loc) => loc.id !== id));
			}
		}
	};

	return (
		<div>
			<h1 className="title">Mis Favoritos</h1>
			<div className="list">
				{mergedFavorites.map((favorite) => (
					<FavoriteCard
						key={favorite.id}
						item={favorite}
						onRemoveFavorite={() => handleRemoveFavorite(favorite.uniqueKey)}
					/>
				))}
			</div>
		</div>
	);
};
