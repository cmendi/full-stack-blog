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
import Register from "./views/LoginRegister";
import AuthWrapper from "./components/AuthWrapper";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<AuthWrapper>
							<Home />
						</AuthWrapper>
					}
				/>
				<Route
					path="/blogs/new"
					element={
						<AuthWrapper>
							<CreateBlogs />
						</AuthWrapper>
					}
				/>
				<Route
					path="/blogs/:id"
					element={
						<AuthWrapper>
							<OneBlog />
						</AuthWrapper>
					}
				/>
				<Route
					path="/blogs/:id/edit"
					element={
						<AuthWrapper>
							<EditBlog />
						</AuthWrapper>
					}
				/>
				<Route
					path="/admin"
					element={
						<AuthWrapper>
							<Admin />
						</AuthWrapper>
					}
				/>
				<Route path="/contact" element={<Contact />} />
				<Route path="/donate" element={<Donate />} />
				<Route path="/thank-you" element={<Thanks />} />
				<Route path="/login" element={<Register />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
