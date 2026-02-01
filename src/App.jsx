import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import ApiTest from "./components/debug/ApiTest";
import ArticleDebug from "./components/debug/ArticleDebug";

import { TRACKING_ID } from "./data/tracking";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="min-h-screen bg-gray-50">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/debug" element={<ApiTest />} />
				<Route path="/article-debug" element={<ArticleDebug />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;