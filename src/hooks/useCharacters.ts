import { useState, useEffect } from "react";
import { Character, Pagination } from "../types/characters";
import { getCharacters } from "../api/rickAndMortyApi";

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [pagination, setPagination] = useState<Pagination>({ count: 0, next: null, pages: 0, prev: null });

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await getCharacters();
      setCharacters(response.results);
      setPagination(response.info)
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return { characters, loading, error, pagination };
};

export default useCharacters;
