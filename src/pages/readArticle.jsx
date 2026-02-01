import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import { getArticleBySlug } from "../services/articleService";
import { processGitHubMarkdown, markdownComponents } from "../utils/markdownProcessor";

const ReadArticle = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		setLoading(true);
		setError(null);

		console.log('Fetching article with slug:', slug);
		getArticleBySlug(slug)
			.then((articleData) => {
				console.log('Article fetched successfully:', articleData);
				
				try {
					// Process the markdown content to fix GitHub relative URLs
					const processedContent = processGitHubMarkdown(
						articleData.content, 
						articleData.githubRawUrl
					);
					
					setArticle({
						...articleData,
						content: processedContent
					});
				} catch (processingError) {
					console.warn('Error processing markdown, using original content:', processingError);
					// Fallback to original content if processing fails
					setArticle(articleData);
				}
				
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error fetching article:', err);
				setError(err.message || 'Failed to load article');
				setLoading(false);
				setArticle(null);
			});
	}, [slug]);

	if (loading) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
					<p className="text-gray-600">Loading article...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-gray-50">
				<NavBar />
				<div className="max-w-4xl mx-auto pt-32 px-6 text-center">
					<h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Article</h1>
					<p className="text-gray-600 mb-6">{error}</p>
					<button
						onClick={() => navigate('/articles')}
						className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
					>
						Back to Articles
					</button>
				</div>
			</div>
		);
	}

	if (!article) {
		return (
			<div className="min-h-screen bg-gray-50">
				<NavBar />
				<div className="max-w-4xl mx-auto pt-32 px-6 text-center">
					<h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
					<p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
					<button
						onClick={() => navigate('/articles')}
						className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
					>
						Back to Articles
					</button>
				</div>
			</div>
		);
	}

	return (
		<>
			<Helmet>
				<title>{`${article.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article.description} />
			</Helmet>

			<div className="min-h-screen bg-gray-50">
				<NavBar />

				<div className="max-w-4xl mx-auto pt-32 px-6">
					<button
						onClick={() => navigate(-1)}
						className="mb-8 text-secondary hover:text-primary inline-flex items-center gap-2 transition-colors duration-200"
					>
						← Back to Articles
					</button>

					<article className="mb-12">
						<header className="mb-8">
							<h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
								{article.title}
							</h1>
							<p className="text-xl text-gray-600 leading-relaxed">
								{article.description}
							</p>
						</header>

						<div className="prose prose-lg max-w-none">
							{article.content ? (
								<ReactMarkdown 
									remarkPlugins={[remarkGfm]}
									rehypePlugins={[rehypeHighlight]}
									components={markdownComponents}
								>
									{article.content}
								</ReactMarkdown>
							) : (
								<div className="text-center py-12 text-gray-500">
									<p>No content available for this article.</p>
								</div>
							)}
						</div>
					</article>

					<Footer />
				</div>
			</div>
		</>
	);
};

export default ReadArticle;
 