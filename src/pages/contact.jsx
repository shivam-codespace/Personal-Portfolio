import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="min-h-screen bg-gray-50">
				<NavBar active="contact" />
				
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
								Let's Get in Touch: Ways to Connect with Me
							</h1>

							<div className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
								Thank you for your interest in getting in touch with
								me. I welcome your feedback, questions, and
								suggestions. If you have a specific question or
								comment, please feel free to email me directly at{" "}
								<a 
									href={`mailto:${INFO.main.email}`}
									className="text-link hover:underline"
								>
									{INFO.main.email}
								</a>
								. I make an effort to respond to all messages within
								24 hours, although it may take me longer during busy
								periods. Alternatively, you can use the contact form
								on my website to get in touch. Simply fill out the
								required fields and I'll get back to you as soon as
								possible. Finally, if you prefer to connect on
								social media, you can find me on{" "}
								<a
									href={INFO.socials.instagram}
									target="_blank"
									rel="noreferrer"
									className="text-link hover:underline"
								>
									Instagram
								</a>
								. I post regular updates and engage with my
								followers there, so don't hesitate to reach out.
								Thanks again for your interest, and I look forward
								to hearing from you!
							</div>

							<div className="mb-12">
								<div className="max-w-sm">
									<Socials />
								</div>
							</div>

							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;