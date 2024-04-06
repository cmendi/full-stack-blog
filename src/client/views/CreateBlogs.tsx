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
		<div className="row justify-content-center">
			<div className="col-8">
				<Select value={tags} onChange={setTags} options={options} isMulti className="basic-multi-select shadow-sm" classNamePrefix="select" />
			</div>
		</div>
	);
};

export default CreateBlogs;
