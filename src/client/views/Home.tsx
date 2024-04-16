import React, { useState, useEffect } from "react";
import { Iauthors, Iblogs, IblogTags, Itags } from "../types";
import { GET } from "../services/fetchHelper";

const Home = () => {
	const [blogs, setBlogs] = useState<Iblogs[]>([]);
	const [authors, setAuthors] = useState<Iauthors[]>([]);
	const [blogTags, setBlogTags] = useState<IblogTags[]>([]);
	const [tags, setTags] = useState<Itags[]>([]);
	const [expandedBlogs, setExpandedBlogs] = useState<{ [key: number]: boolean }>({});

	const previewLength = 250;

	// Fetching content
	useEffect(() => {
		GET("/api/blogs").then(setBlogs);
		GET("/api/authors").then(setAuthors);
		GET("/api/blogtags").then(setBlogTags);
		GET("/api/tags").then(setTags);
	}, []);

	// Display Author who wrote the blog.
	const getAuthor = (authorId: number) => {
		const author = authors.find((author) => author.id === authorId);
		return author ? author.name : "uknown";
	};

	// Display Tags.
	const getTags = (blogId: number) => {
		const blogTag = blogTags.filter((blogTag) => blogTag.blog_id === blogId);
		const tagsForBlog: JSX.Element[] = [];
		blogTag.forEach((tag) => {
			const tagObject = tags.find((t) => t.id === tag.tag_id);
			if (tagObject) {
				tagsForBlog.push(
					<span key={`tag-object-${tagObject.id}`} className="bg-light shadow shadow-sm rounded-pill p-2 m-2 fw-bold">
						{tagObject.name}
					</span>
				);
			}
		});

		return tagsForBlog;
	};

	// Toggle read more for a specific blog
	const toggleReadMore = (blogId: number) => {
		setExpandedBlogs((prev) => ({
			...prev,
			[blogId]: !prev[blogId],
		}));
	};

	return (
		<>
			<img className="w-100" src="/assets/MainPhoto.png" alt="golf image" />
			<div className="container">
				<div className="row justify-content-center">
					<div className="d-flex justify-content-center mt-5">
						<h1 className="fw-bold">Blog Posts</h1>
					</div>
					{blogs.map((blog) => (
						<div className="col-12 col-md-7" key={`blog-card-${blog.id}`}>
							<div className="card m-4 shadow shadow-sm">
								<div className="card-body p-4">
									<h2 className="card-title fw-bold m-4">{blog.title}</h2>
									<div className="card-text m-4">
										{expandedBlogs[blog.id] || blog.content.length <= previewLength
											? blog.content.split("\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)
											: `${blog.content.substring(0, previewLength)}... `}
										<a className="text-decoration-none" onClick={() => toggleReadMore(blog.id)}>
											{expandedBlogs[blog.id] ? " read less" : " read more"}
										</a>
									</div>
									<h6 className="card-subtitle mb-2 text-muted m-4">
										by {getAuthor(blog.author_id)} on {new Date(blog.created_at).toLocaleString()}
									</h6>
									<div className="card-subtitle mb-2 text-muted m-4 d-flex flex-wrap align-items-center">Tags: {getTags(blog.id)}</div>
									<button className="btn btn-info m-4 fw-bold">Details</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
