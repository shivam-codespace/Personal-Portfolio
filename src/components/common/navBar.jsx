import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ active }) => {
	return (
		<div className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-md sm:max-w-none sm:w-auto">
			<nav className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-4 sm:px-6 py-3 shadow-lg">
				<ul className="flex items-center justify-center space-x-3 sm:space-x-6 text-sm">
					<li>
						<Link 
							to="/" 
							className={`font-medium transition-colors duration-200 hover:text-link ${
								active === "home" 
									? "text-link" 
									: "text-gray-600"
							}`}
						>
							Home
						</Link>
					</li>
					<li>
						<Link 
							to="/about" 
							className={`font-medium transition-colors duration-200 hover:text-link ${
								active === "about" 
									? "text-link" 
									: "text-gray-600"
							}`}
						>
							About
						</Link>
					</li>
					<li>
						<Link 
							to="/skills" 
							className={`font-medium transition-colors duration-200 hover:text-link ${
								active === "skills" 
									? "text-link" 
									: "text-gray-600"
							}`}
						>
							Skills
						</Link>
					</li>
					<li>
						<Link 
							to="/projects" 
							className={`font-medium transition-colors duration-200 hover:text-link ${
								active === "projects" 
									? "text-link" 
									: "text-gray-600"
							}`}
						>
							Projects
						</Link>
					</li>
					<li>
						<Link 
							to="/articles" 
							className={`font-medium transition-colors duration-200 hover:text-link ${
								active === "articles" 
									? "text-link" 
									: "text-gray-600"
							}`}
						>
							Articles
						</Link>
					</li>
					<li>
						<Link 
							to="/contact" 
							className={`font-medium transition-colors duration-200 hover:text-link ${
								active === "contact" 
									? "text-link" 
									: "text-gray-600"
							}`}
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;