import React, { createContext, useContext, useState, ReactNode } from 'react';


interface Favorite {
  id: number;
}


interface FavoritesContextType {
  favorites: Favorite[];
  addFavorite: (favorite: Favorite) => void;
  deleteFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const addFavorite = (favorite: Favorite) => {
    setFavorites([...favorites, favorite]);
  };

  const deleteFavorite = (id: number) => {
    setFavorites(favorites.filter(favorite => favorite.id !== id));
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        deleteFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('');
  }
  return context;
};
