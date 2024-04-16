import React, { useState, useEffect } from "react";
import { GET } from "../services/fetchHelper";
import Select from "react-select";
import { MultiValue } from "react-select";
import type { Itags } from "../types";

interface Option {
	value: number;
	label: string;
}

const CreateBlogs = () => {
	const [tags, setTags] = useState<MultiValue<Option>>([]);
	const [options, setOptions] = useState<MultiValue<Option>>([]);

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
						<label htmlFor="title" className="form-label">
							Title
						</label>
						<input className="form-control" />
					</div>
					<Select value={tags} onChange={setTags} options={options} isMulti className="basic-multi-select shadow-sm mb-3" classNamePrefix="select" />
					<div className="mb-3">
						<label htmlFor="content" className="form-label">
							Content
						</label>
						<textarea className="form-control"></textarea>
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
