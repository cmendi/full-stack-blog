import React, { useState, useEffect } from "react";
import { Iauthors, Iblogs, IblogTags, Itags } from "../types";
import { GET } from "../services/fetchHelper";

const Home = () => {
	const [blogs, setBlogs] = useState<Iblogs[]>([]);
	const [authors, setAuthors] = useState<Iauthors[]>([]);
	const [blogTags, setBlogTags] = useState<IblogTags[]>([]);
	const [tags, setTags] = useState<Itags[]>([]);

	useEffect(() => {
		GET("/api/blogs").then(setBlogs);
	}, []);

	useEffect(() => {
		GET("/api/authors").then(setAuthors);
	}, []);

	useEffect(() => {
		GET("/api/blogtags").then(setBlogTags);
	}, []);

	useEffect(() => {
		GET("/api/tags").then(setTags);
	}, []);

	const getAuthor = (authorId: number) => {
		const author = authors.find((author) => author.id === authorId);
		return author ? author.name : "uknown";
	};

	const getTags = (blogId: number) => {
		const blogTag = blogTags.filter((blogTag) => blogTag.blog_id === blogId);
		const tagsForBlog: JSX.Element[] = [];
		blogTag.forEach((tag) => {
			const tagObject = tags.find((t) => t.id === tag.tag_id);
			if (tagObject) {
				tagsForBlog.push(
					<span key={`tag-object-${tagObject.id}`} className="bg-info rounded-pill p-2 m-2 fw-bold">
						{tagObject.name}
					</span>
				);
			}
		});

		// TODO:
		// Need to add space in between tags.
		return tagsForBlog;
	};

	return (
		<div className="row justify-content-center mt-5">
			<div className="container row justify-content-center">
				{blogs.map((blog) => (
					<div className="col-12 col-md-12" key={`blog-card-${blog.id}`}>
						<div className="card m-4 shadow shadow-sm">
							<div className="card-body p-4">
								<h2 className="card-title m-4">{blog.title}</h2>
								<p className="card-text m-4">{blog.content}</p>
								<h6 className="card-subtitle mb-2 text-muted m-4">Author: {getAuthor(blog.author_id)}</h6>
								<div className="card-subtitle mb-2 text-muted m-4">Tags: {getTags(blog.id)}</div>
								<button className="btn btn-danger m-4 fw-bold">Edit blog</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
