import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  favorites: number[];
  login: () => void;
  logout: () => void;
  toggleFavorite: (characterId: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const LogContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('logContex debe ser usado dentro de un LogProvider');
  }
  return context;
};

export const LogProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const login = () => {

    setIsLoggedIn(true);
  };

  const logout = () => {

    setIsLoggedIn(false);
  };

  const toggleFavorite = (characterId: number) => {
    if (favorites.includes(characterId)) {
      setFavorites(favorites.filter((id) => id !== characterId));
    } else {
      setFavorites([...favorites, characterId]);
    }
  };

  const contextValue: AuthContextType = {
    isLoggedIn,
    favorites,
    login,
    logout,
    toggleFavorite,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
