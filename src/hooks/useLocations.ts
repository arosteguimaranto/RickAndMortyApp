import { useEffect, useState } from "react"
import { Location, Pagination } from "../types"
import { API_URL, getLocations } from "../api/rickAndMortyApi";

const useLocations = () => {
	const [locations, setLocations] = useState<Location[]>([])
	const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [pagination, setPagination] = useState<Pagination>({ count: 0, next: null, pages: 0, prev: null });
	const [currentPageUrl, setCurrentPageUrl] = useState<string>(`${API_URL}/location`);

	useEffect(() => {
    fetchLocations(currentPageUrl);
			// eslint-disable-next-line
  }, [currentPageUrl]);

	const fetchLocations = async (url: string) => {
		try {
			const response = await getLocations(url)
			if (locations.length === 0) {
				setLocations(response.results);
			} else {
				setLocations(prevLocations => [...prevLocations, ...response.results]);
			}
			setPagination(response.info)
      setLoading(false);
		} catch (error) {
			setError(true);
			setLoading(false);
		}
	}

	const goToNextPage = () => {
    setCurrentPageUrl(pagination.next || '');
  };


	return { locations, loading, error, pagination, goToNextPage }
}

export default useLocations;
