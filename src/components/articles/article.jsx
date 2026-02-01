
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = ({ date, title, description, link, keywords }) => {
	// Format the date properly
	const formatDate = (dateString) => {
		try {
			const date = new Date(dateString);
			return date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short',
				day: 'numeric'
			});
		} catch (error) {
			return dateString; // fallback to original string
		}
	};

	return (
		<div className="flex border-b border-gray-100 py-6 hover:bg-gray-50 transition-colors duration-200">
			<div className="flex-shrink-0 w-24 mr-6">
				<div className="text-sm text-tertiary">{formatDate(date)}</div>
			</div>

			<Link to={link} className="flex-1 group">
				<div className="cursor-pointer">
					<h3 className="text-lg font-medium text-primary group-hover:text-link transition-colors duration-200 mb-2">
						{title}
					</h3>
					<p className="text-secondary text-sm leading-relaxed mb-3">
						{description}
					</p>
					
					{/* Keywords */}
					{keywords && keywords.length > 0 && (
						<div className="flex flex-wrap gap-2 mb-3">
							{keywords.map((keyword, index) => (
								<span
									key={index}
									className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
								>
									{keyword}
								</span>
							))}
						</div>
					)}
					
					<div className="flex items-center text-link text-sm group-hover:text-primary transition-colors duration-200">
						Read Article{" "}
						<FontAwesomeIcon
							className="ml-1 text-xs"
							icon={faChevronRight}
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Article;
