import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ icon, title, body }) => {
	return (
		<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
			<div className="flex items-center mb-4">
				<div className="w-8 h-8 flex items-center justify-center text-primary mr-3">
					<FontAwesomeIcon icon={icon} />
				</div>
				<h3 className="text-lg font-medium text-primary">{title}</h3>
			</div>
			<div className="text-secondary">
				{body}
			</div>
		</div>
	);
};

export default Card;