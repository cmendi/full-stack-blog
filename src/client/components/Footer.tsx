import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
	// Cannot get the links to not be the full width of the div when in a column
	return (
		<>
			<div className="card-footer bg-info mt-5">
				<div className="row justify-content-center mx-4 p-4">
					<div className="col-12 col-md-4">
						<h5 className="fw-bold">The Mulligan Mashup</h5>
						<p>Swing into success with The Mulligan Mashup, where every stroke tells a story.</p>
					</div>
					<div className="col-12 col-md-4">
						<h5 className="fw-bold">Navigate</h5>
						<Link to={"/"} className="nav-link m-2 fw-bold">
							Home
						</Link>
						<Link to={"/blogs/new"} className="nav-link m-2 fw-bold">
							Create Blogs
						</Link>
						<Link to={"/"} className="nav-link m-2 fw-bold">
							Admin
						</Link>
					</div>
					<div className="col-12 col-md-4">
						<h5 className="fw-bold">Follow Us</h5>
						<div className="d-flex justify-content-start flex-wrap">
							<h4 className="social-icon">
								<FaInstagram />
							</h4>
							<h4 className="social-icon">
								<FaYoutube />
							</h4>
							<h4 className="social-icon">
								<FaGithub />
							</h4>
							<h4 className="social-icon">
								<FaTwitter />
							</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="card-footer">
				<p className="text-center p-3 m-0">@2024 The Mulligan Mashup All rights reserved</p>
			</div>
		</>
	);
};

export default Footer;
