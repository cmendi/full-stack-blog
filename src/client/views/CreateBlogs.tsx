import React, { useState, useEffect } from "react";
import { GET } from "../services/fetchHelper";
import Select, { MultiValue } from "react-select";
import makeAnimated from "react-select/animated";
import type { Itags } from "../types";

interface Option {}

const CreateBlogs = () => {
	const [tags, setTags] = useState<MultiValue<Option>>([]);
	const [options, setOptions] = useState<MultiValue<Option>>([]);
	const animatedComponents = makeAnimated();

	useEffect(() => {
		GET<Itags[]>("/api/tags").then((tags) => {
			setOptions(tags.map((tag) => ({ value: tag.id, label: tag.name })));
		});
	}, []);

	return (
		<div className="container">
			<div className="row justify-content-center align-items-center">
				<h1 className="my-5 fw-bold text-center">Create Blog</h1>
				<div className="col-12 col-md-6">
					<div className="mb-3">
						<label htmlFor="title" className="form-label fw-bold">
							Title
						</label>
						<input className="form-control" required />
					</div>
					<div className="mb-3">
						<label htmlFor="title" className="form-label fw-bold">
							Tags
						</label>

						<Select value={tags} components={animatedComponents} onChange={setTags} options={options} isMulti className="basic-multi-select mb-3" classNamePrefix="select" required />
					</div>
					<div className="mb-3">
						<label htmlFor="content" className="form-label fw-bold ">
							Content
						</label>
						<textarea className="form-control large-textarea" required></textarea>
					</div>
					<button type="submit" className="btn btn-info">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateBlogs;
