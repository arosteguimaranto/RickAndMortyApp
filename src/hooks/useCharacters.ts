import { useState, useEffect } from "react";
import { Character, Pagination } from "../types";
import { API_URL, getCharacters } from "../api/rickAndMortyApi";

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [pagination, setPagination] = useState<Pagination>({ count: 0, next: null, pages: 0, prev: null });
	const [currentPageUrl, setCurrentPageUrl] = useState<string>(`${API_URL}/character`);



  useEffect(() => {
    fetchCharacters(currentPageUrl);
	// eslint-disable-next-line
  }, [currentPageUrl]);

  const fetchCharacters = async (url: string) => {
    try {
      const response = await getCharacters(url);
			if (characters.length === 0) {
				setCharacters(response.results);
			} else {
				setCharacters(prevCharacters => [...prevCharacters, ...response.results]);
			}
      setPagination(response.info)
      setLoading(false);
    } catch (error) {
      setError(true);
			setLoading(false);
    }
  };

	const goToNextPage = () => {
    setCurrentPageUrl(pagination.next || '');
  };

  return { characters, loading, error, pagination, goToNextPage };
};

export default useCharacters;
