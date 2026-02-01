import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="min-h-screen bg-gray-50">
				<NavBar active="about" />

				<div className="max-w-6xl mx-auto px-6 pt-20">
					{/* Logo Container */}
					<div className="flex justify-start pt-4 pb-2">
						<div className="flex fixed top-[120px] left-[50px] z-40 border border-white rounded-full shadow-lg bg-white p-2">
							<Logo width={46} link={false} rounded={true} />
						</div>
					</div>

					{/* Main Content */}
					<div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl">
						{/* Content Side */}
						<div className="lg:col-span-7">
							<h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
								{INFO.about.title}
							</h1>
							<h6 className="text-4xl lg:text-3xl text-gray-900 mb-3 leading-tight flex items-center gap-3">
								MCA graduate from MMMUT Gorakhpur
							</h6>
							
							{/* Break the description into multiple paragraphs for better readability */}
							<div className="text-lg text-gray-600 leading-relaxed mb-8 space-y-4">
								<p className="text-justify">
									I began my journey in software development by pursuing a Master of Computer Applications (MCA) from Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur. During my academic journey, I focused on Java and Spring Boot, building multiple backend projects to gain hands-on experience in designing scalable and secure applications.
								</p>
								
								<p className="text-justify">
									Along the way, I worked on a variety of personal and academic projects, many of which are open-source, allowing me to explore real-world backend challenges such as API design, database integration, authentication, and performance optimization. These projects played a key role in strengthening my problem-solving skills and understanding of clean architecture and best practices.
								</p>
								
								<p className="text-justify">
									I enjoy learning by building, experimenting, and continuously improving my code. I'm always open to feedback, collaboration, and new ideas, and I'm actively looking for opportunities to grow as a backend developer and work on impactful real-world systems.
								</p>
							</div>

							{/* Mobile Socials */}
							<div className="lg:hidden mb-8">
								<Socials />
							</div>
						</div>

						{/* Image and Socials Side */}
						<div className="lg:col-span-5">
							<div className="mb-8 flex justify-center lg:justify-end">
								<div className="w-64 h-64 lg:w-72 lg:h-72">
									<div className="overflow-hidden rounded-2xl transform rotate-3 w-full h-full shadow-lg">
										<img
											src="about.jpg"
											alt="about"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

							{/* Desktop Socials - positioned below image and aligned to right */}
							<div className="hidden lg:block lg:flex lg:justify-end">
								<div className="w-64 lg:w-72">
									<Socials />
								</div>
							</div>
						</div>
					</div>

					<Footer />
				</div>
			</div>
		</>
	);
};

export default About;