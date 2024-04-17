import React, { useState, useEffect } from "react";
import { GET } from "../services/fetchHelper";
import Select, { MultiValue } from "react-select";
import type { IblogTags, Itags } from "../types";
import { useParams } from "react-router-dom";

interface Option {
	value: number;
	label: string;
}

const EditBlog = () => {
	const { id } = useParams();
	const [tags, setTags] = useState<MultiValue<Option>>([]);
	const [options, setOptions] = useState<MultiValue<Option>>([]);
	const [blogTags, setBlogTags] = useState<IblogTags[]>([]);
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");

	useEffect(() => {
		GET("/api/blogtags").then(setBlogTags);
		GET(`/api/blogs/${id}`).then((blog) => {
			setContent(blog.content);
			setTitle(blog.title);
		});
		GET<Itags[]>("/api/tags").then((tags) => {
			setOptions(tags.map((tag) => ({ value: tag.id, label: tag.name })));
		});
	}, []);

	return (
		<div className="container">
			<div className="row justify-content-center align-items-center">
				<h1 className="my-5 fw-bold text-center">Edit Blog</h1>
				<div className="col-12 col-md-6">
					<div className="mb-3">
						<label htmlFor="title" className="form-label fw-bold">
							Title
						</label>
						<input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" required />
					</div>
					<div className="mb-3">
						<label htmlFor="title" className="form-label fw-bold">
							Tags
						</label>

						<Select value={tags} onChange={setTags} options={options} isMulti className="basic-multi-select mb-3" classNamePrefix="select" required />
					</div>
					<div className="mb-3">
						<label htmlFor="content" className="form-label fw-bold">
							Content
						</label>
						<textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control large-textarea" required></textarea>
					</div>
					<button className="btn btn-info">Save</button>
					<button className="btn btn-danger m-4">Delete</button>
				</div>
			</div>
		</div>
	);
};

export default EditBlog;
