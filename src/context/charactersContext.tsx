
import React, { createContext, ReactNode, useContext, } from 'react';
import useCharacters from '../hooks/useCharacters';
import { Character } from '../types/characters';


interface RickAndMortyContextType {
  characters: Character[];
  loading: boolean;
}

const RickAndMortyContext = createContext<RickAndMortyContextType | undefined>(undefined);

export const useRickAndMortyContext = () => {
  const context = useContext(RickAndMortyContext);
  if (!context) {
    throw new Error('useRickAndMorty debe ser usado dentro de un RickAndMortyProvider');
  }
  return context;
};

export const RickAndMortyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { characters, loading } = useCharacters();

  return (
    <RickAndMortyContext.Provider value={{ characters, loading }}>
      {children}
    </RickAndMortyContext.Provider>
  );
};
