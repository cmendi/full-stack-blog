import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlogs from "./views/CreateBlogs";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./views/Admin";
import EditBlog from "./views/EditBlog";
import OneBlog from "./views/OneBlog";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs/new" element={<CreateBlogs />} />
				<Route path="/blogs/:id" element={<OneBlog />} />
				<Route path="/blogs/:id/edit" element={<EditBlog />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
