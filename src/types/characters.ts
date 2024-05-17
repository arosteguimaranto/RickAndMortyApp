export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	image: string;
}

export interface Pagination {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

