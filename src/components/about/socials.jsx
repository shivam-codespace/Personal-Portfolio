import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

const Socials = () => {
	return (
		<div className="space-y-4">
			<div className="flex items-center ">
				<a 
					href={INFO.socials.twitter} 
					target="_blank" 
					rel="noreferrer"
					className="flex items-center text-secondary hover:text-primary transition-colors duration-200"
				>
					<div className="w-6 h-6 flex items-center justify-center mr-3">
						<FontAwesomeIcon icon={faTwitter} />
					</div>
					<span className="text-sm">Follow on Twitter</span>
				</a>
			</div>

			<div className="flex items-center">
				<a 
					href={INFO.socials.github} 
					target="_blank" 
					rel="noreferrer"
					className="flex items-center text-secondary hover:text-primary transition-colors duration-200"
				>
					<div className="w-6 h-6 flex items-center justify-center mr-3">
						<FontAwesomeIcon icon={faGithub} />
					</div>
					<span className="text-sm">Follow on GitHub</span>
				</a>
			</div>

			<div className="flex items-center">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
					className="flex items-center text-secondary hover:text-primary transition-colors duration-200"
				>
					<div className="w-6 h-6 flex items-center justify-center mr-3">
						<FontAwesomeIcon icon={faLinkedin} />
					</div>
					<span className="text-sm">Follow on LinkedIn</span>
				</a>
			</div>

			<div className="flex items-center">
				<a
					href={INFO.socials.instagram}
					target="_blank"
					rel="noreferrer"
					className="flex items-center text-secondary hover:text-primary transition-colors duration-200"
				>
					<div className="w-6 h-6 flex items-center justify-center mr-3">
						<FontAwesomeIcon icon={faInstagram} />
					</div>
					<span className="text-sm">Follow on Instagram</span>
				</a>
			</div>

			<div className="pt-4 border-t border-gray-200">
				<a
					href={`mailto:${INFO.main.email}`}
					target="_blank"
					rel="noreferrer"
					className="flex items-center text-secondary hover:text-primary transition-colors duration-200"
				>
					<div className="w-6 h-6 flex items-center justify-center mr-3">
						<FontAwesomeIcon icon={faEnvelope} />
					</div>
					<span className="text-sm">{INFO.main.email}</span>
				</a>
			</div>
		</div>
	);
};

export default Socials;