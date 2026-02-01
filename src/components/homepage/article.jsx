import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = ({ title, description, date, link, keywords }) => {
	return (
		<div className="py-4 border-b border-gray-100 last:border-b-0">
			<div className="text-xs text-gray-400 mb-2">
				{date}
			</div>
			<Link to={link} className="group">
				<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-link transition-colors duration-200">
					{title}
				</h3>
				<p className="text-gray-600 text-sm leading-relaxed mb-3">
					{description}
				</p>
				
				{/* Keywords */}
				{keywords && keywords.length > 0 && (
					<div className="flex flex-wrap gap-1 mb-3">
						{keywords.slice(0, 3).map((keyword, index) => (
							<span
								key={index}
								className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
							>
								{keyword}
							</span>
						))}
						{keywords.length > 3 && (
							<span className="text-xs text-gray-400">+{keywords.length - 3} more</span>
						)}
					</div>
				)}
				
				<div className="inline-flex items-center text-link text-sm group-hover:text-gray-900 transition-colors duration-200">
					Read article{" "}
					<FontAwesomeIcon
						className="ml-1 text-xs"
						icon={faChevronRight}
					/>
				</div>
			</Link>
		</div>
	);
};

export default Article;