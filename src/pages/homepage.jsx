
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import Hero from "../data/Hero";

import { getAllArticles } from "../services/articleService";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);
			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [oldLogoSize]);

	useEffect(() => {
		getAllArticles()
			.then((data) => {
				// show latest 3 articles on homepage
				setArticles(data.slice(0, 3));
			})
			.catch(console.error);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="min-h-screen bg-gray-50">
				<NavBar active="home" />

				<div className="max-w-6xl mx-auto px-6 pt-24">
					{/* Logo */}
					<div className="flex justify-start items-center pt-16 pb-6">
						<div
							className={`flex transition-all duration-300 ${
								stayLogo
									? "fixed top-[120px] left-[50px] z-40 border border-white rounded-full shadow-lg bg-white p-2"
									: "relative"
							}`}
						>
							<Logo
								width={logoSize}
								link={false}
								rounded={stayLogo}
							/>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row gap-8">
						{/* Left column */}
						<div className="flex-1 lg:max-w-2xl">
							{/* Hero */}
							<div className="mb-12">
								<Hero
									title={INFO.homepage.title}
									description={INFO.homepage.description}
								/>

								{/* Social links */}
								<div className="flex items-center space-x-4 mt-6 mb-12">
									<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faTwitter} className="text-xl text-gray-500 hover:text-link" />
									</a>
									<a href={INFO.socials.github} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faGithub} className="text-xl text-gray-500 hover:text-link" />
									</a>
									<a href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faStackOverflow} className="text-xl text-gray-500 hover:text-link" />
									</a>
									<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faInstagram} className="text-xl text-gray-500 hover:text-link" />
									</a>
									<a href={`mailto:${INFO.main.email}`}>
										<FontAwesomeIcon icon={faMailBulk} className="text-xl text-gray-500 hover:text-link" />
									</a>
								</div>
							</div>

							{/* Projects */}
							<div className="mb-12">
								<AllProjects />
							</div>

							{/* Articles */}
							<div className="space-y-6">
								{articles.map((article) => (
									<Article
										key={article.id}
										date={article.createdAt}
										title={article.title}
										description={article.description}
										link={`/article/${article.slug}`}
										keywords={article.keywords}
									/>
								))}
							</div>
						</div>

						{/* Right column */}
						<div className="lg:w-80 flex-shrink-0">
							<div className="mb-8 flex justify-center lg:justify-start">
								<div className="w-64 h-64 lg:w-72 lg:h-72">
									<div className="overflow-hidden rounded-2xl transform rotate-3 w-full h-full shadow-lg">
										<img
											src="homepage.jpg"
											alt="profile"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

							<div className="sticky top-32">
								<Works />
							</div>
						</div>
					</div>

					<Footer />
				</div>
			</div>
		</>
	);
};

export default Homepage;