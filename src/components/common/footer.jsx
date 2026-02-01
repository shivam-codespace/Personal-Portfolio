import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="mt-20 pt-8 border-t border-gray-200">
			<div className="flex flex-col items-center space-y-6">
				<div className="flex flex-wrap justify-center gap-6">
					<Link 
						to="/" 
						className="text-sm text-gray-500 hover:text-link transition-colors duration-200"
					>
						Home
					</Link>
					<Link 
						to="/about" 
						className="text-sm text-gray-500 hover:text-link transition-colors duration-200"
					>
						About
					</Link>
					<Link 
						to="/skills" 
						className="text-sm text-gray-500 hover:text-link transition-colors duration-200"
					>
						Skills
					</Link>
					<Link 
						to="/projects" 
						className="text-sm text-gray-500 hover:text-link transition-colors duration-200"
					>
						Projects
					</Link>
					<Link 
						to="/articles" 
						className="text-sm text-gray-500 hover:text-link transition-colors duration-200"
					>
						Articles
					</Link>
					<Link 
						to="/contact" 
						className="text-sm text-gray-500 hover:text-link transition-colors duration-200"
					>
						Contact
					</Link>
				</div>
				
				<div className="text-sm text-gray-400">
					©copywrite 2026. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;