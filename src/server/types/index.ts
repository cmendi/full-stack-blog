export interface IBaseAuthor {
	name: string;
	email: string;
}

export interface IAuthor extends IBaseAuthor {
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

export interface Itag {
	id: number;
	name: string;
}

export interface IBlogTags {
	blog_id: number;
	tag_id: number;
}
