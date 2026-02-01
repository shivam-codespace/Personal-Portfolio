import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

const Logo = ({ width, link = true, rounded = false }) => {
	const imageElement = (
		<img 
			src={INFO.main.logo} 
			alt="logo" 
			className={`block transition-all duration-300 ${rounded ? "rounded-full" : ""}`}
			width={width} 
		/>
	);

	return link ? <Link to="/">{imageElement}</Link> : imageElement;
};

export default Logo;