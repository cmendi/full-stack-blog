export type SupportMethods = "GET" | "PUT" | "POST" | "DELETE";

export interface Itags {
	tag_id: number;
	id: number;
	name: string;
}

export interface Iblogs {
	id: number;
	title: string;
	tagname: string;
	author_id: number;
	content: string;
	created_at: Date;
	tags: [];
}

export interface Iauthors {
	id: number;
	name: string;
	email: string;
}

export interface IblogTags {
	blog_id: number;
	tag_id: number;
	tagname: string;
}
