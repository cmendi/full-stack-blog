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

export interface IBlogs extends IBaseBlogs {
	id: number;
	created_at: Date;
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
