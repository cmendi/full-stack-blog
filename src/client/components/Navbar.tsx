import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const handleToggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};
	const handleNavLinkClick = () => {
		setIsCollapsed(true);
	};
	return (
		<div className="container">
			<nav className="navbar navbar-expand-md">
				<Link className="navbar-brand" to={"/"}>
					<img className="image" src="/assets/websitelogo.png" />
				</Link>
				<button className="navbar-toggler mx-4" type="button" onClick={handleToggleCollapse}>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className={`collapse navbar-collapse ${isCollapsed ? "collapse-transition" : "show collapse-transition"}`}>
					<div className="navbar-nav">
						<Link to={"/"} onClick={handleNavLinkClick} className="text-center text-dark nav-link m-2 fw-bold">
							Home
						</Link>
						<Link to={"/blogs/new"} onClick={handleNavLinkClick} className="text-center text-info text-nowrap nav-link m-2 fw-bold">
							Create Blogs
						</Link>
						<Link to={"/admin"} onClick={handleNavLinkClick} className="text-center text-info nav-link m-2 fw-bold">
							Admin
						</Link>
						<Link to={"/contact"} onClick={handleNavLinkClick} className="text-center text-info nav-link m-2 fw-bold">
							Contact
						</Link>
						<Link to={"/donate"} onClick={handleNavLinkClick} className="text-center text-info nav-link m-2 fw-bold">
							Donate
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
