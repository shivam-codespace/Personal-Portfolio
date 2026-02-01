
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = ({ logo, title, description, linkText, link }) => {
	return (
		<Link to={link} className="block group h-full">
			<div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full flex flex-col">
				<div className="flex items-start mb-4 flex-1">
					<img 
						src={logo} 
						alt="logo" 
						className="w-10 h-10 rounded-lg object-cover mr-3 flex-shrink-0"
					/>
					<div className="flex-1">
						<h3 className="text-base font-semibold text-gray-900 group-hover:text-link transition-colors duration-200 mb-2">
							{title}
						</h3>
						<p className="text-gray-600 text-sm leading-relaxed">
							{description}
						</p>
					</div>
				</div>
				
				<div className="flex items-center text-link text-sm group-hover:text-gray-900 transition-colors duration-200 mt-auto">
					<FontAwesomeIcon icon={faLink} className="mr-2 text-xs" />
					<span>{linkText}</span>
				</div>
			</div>
		</Link>
	);
};

export default Project;
