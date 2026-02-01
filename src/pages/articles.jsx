
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import { getAllArticles, createArticle } from "../services/articleService";

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [showForm, setShowForm] = useState(false);

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		githubRawUrl: "",
		keywords: "",
	});

	useEffect(() => {
		fetchArticles();
		window.scrollTo(0, 0);
	}, []);

	const fetchArticles = async () => {
		setLoading(true);
		setError(null);
		try {
			console.log('Fetching articles...');
			const data = await getAllArticles();
			console.log('Articles fetched successfully:', data);
			setArticles(data);
		} catch (err) {
			console.error('Error fetching articles:', err);
			setError(err.message || 'Failed to load articles');
		} finally {
			setLoading(false);
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let rawUrl = formData.githubRawUrl.trim();

		// Convert normal GitHub URL → Raw GitHub URL
		if (rawUrl.includes("github.com")) {
			rawUrl = rawUrl
				.replace("github.com", "raw.githubusercontent.com")
				.replace("/blob/", "/");
		}

		const payload = {
			title: formData.title,
			description: formData.description,
			githubRawUrl: rawUrl,
			keywords: formData.keywords.split(",").map((k) => k.trim()),
		};

		try {
			console.log('Creating article with payload:', payload);
			const newArticle = await createArticle(payload);
			console.log('Article created successfully:', newArticle);
			
			// Reset form
			setShowForm(false);
			setFormData({
				title: "",
				description: "",
				githubRawUrl: "",
				keywords: "",
			});
			
			// Refresh articles list
			await fetchArticles();
			
		} catch (err) {
			console.error('Error creating article:', err);
			alert("Failed to create article: " + (err.message || 'Unknown error'));
		}
	};

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="min-h-screen bg-gray-50">
				<NavBar active="articles" />

				<div className="max-w-6xl mx-auto px-6 pt-24">
					{/* Logo */}
					<div className="flex justify-start items-center pt-16 pb-6">
						<div className="flex fixed top-[120px] left-[50px] z-40 border border-white rounded-full shadow-lg bg-white p-2">
							<Logo width={46} link={false} rounded />
						</div>
					</div>

					<div className="flex justify-center">
						{/* Centered content */}
						<div className="w-full max-w-4xl">
						<div className="flex justify-between items-center mb-8">
							<h1 className="text-4xl font-bold">
								{INFO.articles.title}
							</h1>

							<button
								onClick={() => setShowForm(!showForm)}
								className="flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2.5 text-white font-medium shadow-lg hover:scale-[1.02] hover:shadow-xl transition"
							>
								+ Add Article
							</button>
						</div>

						<p className="text-lg text-gray-600 mb-12">
							{INFO.articles.description}
						</p>

						{/* ADD ARTICLE FORM */}
						{showForm && (
							<div className="fixed inset-0 z-50 flex items-center justify-center">
								{/* Overlay */}
								<div
									className="absolute inset-0 bg-black/50 backdrop-blur-sm"
									onClick={() => setShowForm(false)}
								/>

								{/* Modal */}
								<div className="relative z-10 w-full max-w-xl mx-4 rounded-2xl bg-white p-8 shadow-2xl animate-fadeIn">
									{/* Header */}
									<div className="flex items-center justify-between mb-6">
										<h2 className="text-2xl font-semibold text-gray-800">
											➕ Create New Article
										</h2>
										<button
											onClick={() => setShowForm(false)}
											className="text-gray-400 hover:text-gray-600 text-xl"
										>
											✕
										</button>
									</div>

									<form
										onSubmit={handleSubmit}
										className="space-y-5"
									>
										{/* Title */}
										<div>
											<label className="block text-sm font-medium text-gray-600 mb-1">
												Title
											</label>
											<input
												type="text"
												name="title"
												value={formData.title}
												onChange={handleChange}
												required
												placeholder="Enter article title"
												className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
											/>
										</div>

										{/* Description */}
										<div>
											<label className="block text-sm font-medium text-gray-600 mb-1">
												Description
											</label>
											<textarea
												name="description"
												value={formData.description}
												onChange={handleChange}
												required
												rows={3}
												placeholder="Short summary of the article"
												className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
											/>
										</div>

										{/* GitHub URL */}
										<div>
											<label className="block text-sm font-medium text-gray-600 mb-1">
												GitHub Raw README URL
											</label>
											<input
												type="url"
												name="githubRawUrl"
												value={formData.githubRawUrl}
												onChange={handleChange}
												required
												placeholder="https://raw.githubusercontent.com/..."
												className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
											/>
										</div>

										{/* Keywords */}
										<div>
											<label className="block text-sm font-medium text-gray-600 mb-1">
												Keywords
											</label>
											<input
												type="text"
												name="keywords"
												value={formData.keywords}
												onChange={handleChange}
												placeholder="spring, java, backend"
												className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
											/>
										</div>

										{/* Actions */}
										<div className="flex items-center justify-end gap-4 pt-4">
											<button
												type="button"
												onClick={() =>
													setShowForm(false)
												}
												className="rounded-lg border border-gray-300 px-5 py-2 text-gray-600 hover:bg-gray-100 transition"
											>
												Cancel
											</button>

											<button
												type="submit"
												className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2.5 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
											>
												Publish Article
											</button>
										</div>
									</form>
								</div>
							</div>
						)}

						{/* ARTICLES LIST */}
						{loading && (
							<div className="text-center py-12">
								<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
								<p className="text-gray-600">Loading articles...</p>
							</div>
						)}

						{error && (
							<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
								<strong>Error:</strong> {error}
								<button 
									onClick={fetchArticles}
									className="ml-4 text-red-800 underline hover:no-underline"
								>
									Retry
								</button>
							</div>
						)}

						{!loading && !error && (
							<div className="space-y-6">
								{articles.length > 0 ? (
									articles.map((article) => (
										<Article
											key={article.id}
											date={article.createdAt}
											title={article.title}
											description={article.description}
											link={`/article/${article.slug}`}
											keywords={article.keywords}
										/>
									))
								) : (
									<div className="text-center py-12 text-gray-500">
										<p className="text-lg mb-4">No articles found</p>
										<p className="text-sm">Create your first article using the button above!</p>
									</div>
								)}
							</div>
						)}

						<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Articles;