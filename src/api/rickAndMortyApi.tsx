import axios from "axios";

export const API_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (url: string) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.log("Error characters not found", error);

		return [];

		//  TODO:  mostrar porque es error
	}
};

export const getLocations = async (url: string) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.log("Error locations not found", error);
		return [];
	}
};
