import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="min-h-screen bg-gray-50">
				<NavBar active="projects" />
				
				<div className="max-w-6xl mx-auto px-6 pt-20">
					{/* Logo Container - positioned to not interfere with content */}
					<div className="flex justify-start pt-4 pb-8">
						<div className="flex fixed top-[100px] left-[40px] z-40 border border-white rounded-full shadow-lg bg-white p-2">
							<Logo width={46} link={false} rounded={true} />
						</div>
					</div>

					{/* Main Content - properly spaced from navbar and logo */}
					<div className="pt-2 ml-0 lg:ml-20">
						<div className="max-w-4xl">
							<h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
								Things I've made trying to put my dent in the universe.
							</h1>

							<p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
								I've worked on a variety of projects over the years
								and I'm proud of the progress I've made. Many of
								these projects are open-source and available for
								others to explore and contribute to. If you're
								interested in any of the projects I've worked on,
								please feel free to check out the code and suggest
								any improvements or enhancements you might have in
								mind. Collaborating with others is a great way to
								learn and grow, and I'm always open to new ideas and
								feedback.
							</p>

							<div className="mb-12">
								<AllProjects />
							</div>

							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;