
import React, { createContext, ReactNode, useContext, } from 'react';
import useCharacters from '../hooks/useCharacters';
import { Character, Pagination } from '../types/characters';


interface RickAndMortyContextType {
  characters: Character[];
  loading: boolean;
  pagination: Pagination,
  error: boolean
}

const RickAndMortyContext = createContext<RickAndMortyContextType | undefined>(undefined);

export const useRickAndMortyContext = () => {
  const context = useContext(RickAndMortyContext);
  if (!context) {
    throw new Error('useRickAndMortyContext debe ser usado dentro de un RickAndMortyProvider');
  }
  return context;
};

export const RickAndMortyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { characters, loading, pagination, error } = useCharacters();

  return (
    <RickAndMortyContext.Provider value={{ characters, loading, pagination, error }}>
      {children}
    </RickAndMortyContext.Provider>
  );
};
