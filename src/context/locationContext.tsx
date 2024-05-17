import React, { createContext, useContext } from "react";
import { Location, Pagination } from "../types";
import useLocations from "../hooks/useLocations";

interface LocationContextType {
	locations: Location[];
	loading: boolean;
	pagination: Pagination;
	error: boolean;
	goToNextPage: () => void;
}

interface LocationProviderProps {
	children: React.ReactNode;
}

const LocationContext = createContext<LocationContextType | undefined>(
	undefined
);

export const useLocationContext = () => {
	const context = useContext(LocationContext);

	if (!context) {
		throw new Error(
			"useLocationContext must be used within a LocationContextProvider"
		);
	}

	return context;
};

export const LocationProvider: React.FC<LocationProviderProps> = ({
	children,
}) => {
	const { locations, loading, error, pagination, goToNextPage } =
		useLocations();

	return (
		<LocationContext.Provider
			value={{ locations, loading, error, pagination, goToNextPage }}
		>
			{children}
		</LocationContext.Provider>
	);
};
