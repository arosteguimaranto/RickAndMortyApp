import axios from "axios";

export const API_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (url: string) => {
	console.log(1)
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.log("Error characters not found", error);
		return [];
	}
};

export const getLocations = async () => {
	try {
		const response = await axios.get(`${API_URL}/location`);
		return response.data;
	} catch (error) {
		console.log("Error locations not found", error);
		return [];
	}
};
