import React, { useState, useEffect } from "react";
import { Iauthors, Iblogs } from "../types";
import { GET } from "../services/fetchHelper";

const Home = () => {
	const [blogs, setBlogs] = useState<Iblogs[]>([]);
	const [authors, setAuthors] = useState<Iauthors[]>([]);

	useEffect(() => {
		GET("/api/blogs").then(setBlogs);
	});
	useEffect(() => {
		GET("/api/authors").then(setAuthors);
	});

	const getAuthor = (authorId: number) => {
		const author = authors.find((author) => author.id === authorId);
		return author ? author.name : "uknown";
	};
	return (
		<div className="row justify-content-center">
			<div className="container row justify-content-center">
				{blogs.map((blog) => (
					<div className="col-12 col-md-5 m-3" key={`blog-card-${blog.id}`}>
						<div className="card">
							<div className="card-body">
								<h2 className="card-title m-3">{blog.title}</h2>
								<h6 className="card-subtitle mb-2 text-muted m-3">Author: {getAuthor(blog.author_id)}</h6>
								<p className="card-text m-3">{blog.content}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
