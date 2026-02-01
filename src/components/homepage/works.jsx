import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Works = () => {
	return (
		<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
			<div className="flex items-center mb-6">
				<div className="w-8 h-8 flex items-center justify-center text-gray-600 mr-3">
					<FontAwesomeIcon icon={faBriefcase} />
				</div>
				<h3 className="text-lg font-semibold text-gray-900">Work</h3>
			</div>
			
			<div className="space-y-6">
				<div className="flex items-start space-x-4">
					{/* <img
						src="./facebook.png"
						alt="facebook"
						className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
					/> */}
					<div className="flex-1">
						<h4 className="text-gray-900 font-medium">Fresher</h4>
						{/* <p className="text-gray-600 text-sm">Software Engineer</p>
						<p className="text-gray-400 text-xs mt-1">2019 - Present</p> */}
					</div>
				</div>

				{/* <div className="flex items-start space-x-4">
					<img
						src="./twitter.png"
						alt="twitter"
						className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
					/>
					<div className="flex-1">
						<h4 className="text-gray-900 font-medium">Twitter</h4>
						<p className="text-gray-600 text-sm">Software Engineer</p>
						<p className="text-gray-400 text-xs mt-1">2019 - Present</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Works;