export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	image: string;
	location: Location
	uniqueKey?: string | undefined;
}

export interface Pagination {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

export interface Location {
	id: number;
	name: string;
	type: string;
	dimension: string;
	url: string
	uniqueKey?: string | undefined;
}

export interface User{
	password: string;
	email: string;
}


