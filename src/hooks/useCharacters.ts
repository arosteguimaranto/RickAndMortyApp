import { useState, useEffect } from 'react';
import axios from "axios";
import { Character } from '../types/characters';
import { getCharacters } from '../api/rickAndMortyApi';



const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    fetchCharacters()

  }, []);

  const fetchCharacters = async () => {
    const characters = await getCharacters();
    setCharacters(characters);
    setLoading(false);
  };

  return { characters, loading };
};

export default useCharacters;
