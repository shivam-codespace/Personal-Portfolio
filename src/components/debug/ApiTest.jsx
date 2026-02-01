import React, { useState, useEffect } from 'react';
import { getAllArticles, createArticle } from '../../services/articleService';

const ApiTest = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const testGetArticles = async () => {
        setLoading(true);
        setError(null);
        try {
            console.log('Testing getAllArticles...');
            const data = await getAllArticles();
            console.log('Success:', data);
            setArticles(data);
        } catch (err) {
            console.error('Error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const testCreateArticle = async () => {
        setLoading(true);
        setError(null);
        try {
            const testArticle = {
                title: "Test Article " + Date.now(),
                description: "This is a test article created for debugging",
                githubRawUrl: "https://raw.githubusercontent.com/octocat/Hello-World/master/README.md",
                keywords: ["test", "debug"]
            };
            console.log('Testing createArticle with:', testArticle);
            const result = await createArticle(testArticle);
            console.log('Article created:', result);
            // Refresh the list
            await testGetArticles();
        } catch (err) {
            console.error('Error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        testGetArticles();
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">API Debug Test</h2>
            
            <div className="mb-4 space-x-4">
                <button 
                    onClick={testGetArticles}
                    disabled={loading}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    {loading ? 'Loading...' : 'Test Get Articles'}
                </button>
                
                <button 
                    onClick={testCreateArticle}
                    disabled={loading}
                    className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    {loading ? 'Loading...' : 'Test Create Article'}
                </button>
            </div>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <strong>Error:</strong> {error}
                </div>
            )}

            <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold mb-2">Articles ({articles.length}):</h3>
                <pre className="text-sm overflow-auto">
                    {JSON.stringify(articles, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default ApiTest;