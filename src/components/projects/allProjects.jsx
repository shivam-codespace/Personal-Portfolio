import React from "react";

import Project from "./project";

import INFO from "../../data/user";

const AllProjects = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
			{INFO.projects.slice(0, 4).map((project, index) => (
				<div key={index} className="w-full">
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;