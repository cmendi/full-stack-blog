import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlogs from "./views/CreateBlogs";
import Home from "./views/Home";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blogs/new" element={<CreateBlogs />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
