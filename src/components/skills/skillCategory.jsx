import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
	faCode, 
	faDatabase, 
	faCogs, 
	faTools, 
	faUsers,
	faShieldAlt,
	faServer,
	faNetworkWired,
	faRocket,
	faBug,
	faHammer,
	faSearchPlus,
	faCube,
	faLightbulb,
	faChartLine,
	faPlug,
	faBolt,
	faStream
} from "@fortawesome/free-solid-svg-icons";
import {
	faAws as faAwsBrands,
	faMicrosoft as faMicrosoftBrands,
	faDocker as faDockerBrands,
	faGitAlt as faGitBrands,
	faJava as faJavaBrands,
	faReact as faReactBrands
} from "@fortawesome/free-brands-svg-icons";

const SkillCategory = ({ title, skills }) => {
	const getIcon = (title) => {
		const lowerTitle = title.toLowerCase();
		
		if (lowerTitle.includes("programming languages")) return faCode;
		if (lowerTitle.includes("java versions")) return faJavaBrands;
		if (lowerTitle.includes("frameworks") || lowerTitle.includes("libraries")) return faReactBrands;
		if (lowerTitle.includes("api development")) return faPlug;
		if (lowerTitle.includes("microservices")) return faNetworkWired;
		if (lowerTitle.includes("security")) return faShieldAlt;
		if (lowerTitle.includes("persistence") || lowerTitle.includes("orm")) return faDatabase;
		if (lowerTitle.includes("databases")) return faServer;
		if (lowerTitle.includes("caching")) return faBolt;
		if (lowerTitle.includes("messaging") || lowerTitle.includes("streaming")) return faStream;
		if (lowerTitle.includes("multithreading") || lowerTitle.includes("concurrency")) return faCogs;
		if (lowerTitle.includes("reactive")) return faRocket;
		if (lowerTitle.includes("aws")) return faAwsBrands;
		if (lowerTitle.includes("azure")) return faMicrosoftBrands;
		if (lowerTitle.includes("devops") || lowerTitle.includes("ci/cd") || lowerTitle.includes("containers")) return faDockerBrands;
		if (lowerTitle.includes("automation") || lowerTitle.includes("infrastructure")) return faTools;
		if (lowerTitle.includes("monitoring") || lowerTitle.includes("observability")) return faChartLine;
		if (lowerTitle.includes("testing")) return faBug;
		if (lowerTitle.includes("build tools")) return faHammer;
		if (lowerTitle.includes("version control") || lowerTitle.includes("code review")) return faGitBrands;
		if (lowerTitle.includes("code quality")) return faSearchPlus;
		if (lowerTitle.includes("design principles") || lowerTitle.includes("architecture")) return faCube;
		if (lowerTitle.includes("software engineering")) return faLightbulb;
		if (lowerTitle.includes("soft skills")) return faUsers;
		
		// Fallback
		return faCode;
	};

	return (
		<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
			<div className="flex items-center mb-4">
				<div className="w-8 h-8 flex items-center justify-center text-primary mr-3">
					<FontAwesomeIcon icon={getIcon(title)} />
				</div>
				<h3 className="text-lg font-medium text-primary">{title}</h3>
			</div>
			
			<div className="flex flex-wrap gap-2">
				{skills.map((skill, index) => (
					<span
						key={index}
						className="inline-block bg-gray-100 text-secondary text-sm px-3 py-1 rounded-full hover:bg-link hover:text-white transition-colors duration-200 cursor-default"
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
};

export default SkillCategory;