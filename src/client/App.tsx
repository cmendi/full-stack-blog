import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlogs from "./views/CreateBlogs";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./views/Admin";
import EditBlog from "./views/EditBlog";
import OneBlog from "./views/OneBlog";
import Contact from "./views/Contact";
import Donate from "./views/Donate";
import Thanks from "./views/Thanks";

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
				<Route path="/contact" element={<Contact />} />
				<Route path="/donate" element={<Donate />} />
				<Route path="/thank-you" element={<Thanks />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
