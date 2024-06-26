export interface IBaseAuthors {
	name: string;
	email: string;
}

export interface IAuthors extends IBaseAuthors {
	id: number;
	created_at: Date;
}
export interface IBaseBlogs {
	title: string;
	content: string;
	author_id: number;
}

export interface IBlogsJoined extends IBaseBlogs {
	id: number;
	created_at: Date;
	name: string;
	email: string;
	tagname?: string | null;
	tagids?: string | null;
}

export interface Itags {
	id: number;
}
export interface IBaseTags {
	name: string;
}

export interface IBlogTags {
	blog_id: number;
	tag_id: number;
}

export interface Tag {
	id: number;
	name: string;
}
