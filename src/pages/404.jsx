import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<div className="relative bg-white min-h-screen">
			{/* Background decorative elements */}
			<div className="hidden xl-custom:block fixed inset-y-0 left-0 w-[calc((100%-1200px)/2)] bg-gray-50 border-r border-gray-200 z-0"></div>
			<div className="hidden xl-custom:block fixed inset-y-0 right-0 w-[calc((100%-1200px)/2)] bg-gray-50 border-l border-gray-200 z-0"></div>
			
			<NavBar />
			
			<div className="relative z-10 max-w-content mx-auto px-4 lg:px-0">
				{/* Logo Container */}
				<div className="flex justify-start pt-6">
					<div className="flex fixed border border-white rounded-full shadow-lg top-16 z-50">
						<Logo width={46} />
					</div>
				</div>

				{/* 404 Content */}
				<div className="flex flex-col items-center justify-center min-h-[60vh] pt-32">
					<div className="text-center">
						<h1 className="text-primary font-secondary text-6xl font-bold mb-4">
							Oops! <FontAwesomeIcon icon={faFaceSadTear} />
						</h1>
						<p className="text-secondary text-lg mb-2">
							We can't seem to find the page you're looking for.
						</p>
						<p className="text-secondary text-sm mb-8">
							The requested URL "{window.location.href}" was not found on this server.
						</p>
						<a 
							href="/" 
							className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-200"
						>
							Go back to the home page
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notfound;