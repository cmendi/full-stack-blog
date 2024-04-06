import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlogs from "./views/CreateBlogs";

const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					<Route path="/blogs/new" element={<CreateBlogs />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
