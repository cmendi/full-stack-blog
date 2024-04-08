export type SupportMethods = "GET" | "PUT" | "POST" | "DELETE";

export interface Itags {
	id: number;
	name: string;
}

export interface Iblogs {
	id: number;
	title: string;
	author_id: number;
	content: string;
	created_at: Date;
}

export interface Iauthors {
	id: number;
	name: string;
	email: string;
}

export interface IblogTags {
	blog_id: number;
	tag_id: number;
}
