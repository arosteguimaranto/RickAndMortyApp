export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	image: string;
	location: Location
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
}

export interface User{
	password: string;
	email: string;
}

