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
		<nav className="navbar shadow-sm navbar-expand-md">
			<div className="containter">
				<Link className="navbar-brand" to={"/"}>
					<img className="image" src="/assets/websitelogo.png" />
				</Link>
			</div>
			<button className="navbar-toggler mx-4" type="button" onClick={handleToggleCollapse}>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className={`collapse navbar-collapse ${isCollapsed ? "collapse-transition" : "show collapse-transition"}`}>
				<div className="navbar-nav">
					<Link to={"/"} onClick={handleNavLinkClick} className="text-dark nav-link m-2 fw-bold">
						Home
					</Link>
					<Link to={"/blogs/new"} onClick={handleNavLinkClick} className="text-info text-nowrap nav-link m-2 fw-bold">
						Create Chirps
					</Link>
					<Link to={"/"} onClick={handleNavLinkClick} className="text-info nav-link m-2 fw-bold">
						Admin
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
