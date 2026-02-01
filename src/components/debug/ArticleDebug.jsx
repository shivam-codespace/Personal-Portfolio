import React, { useState } from 'react';
import { getArticleBySlug } from '../../services/articleService';

const ArticleDebug = () => {
    const [slug, setSlug] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const testArticle = async () => {
        if (!slug.trim()) {
            setError('Please enter a slug');
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            console.log('Testing article with slug:', slug);
            const data = await getArticleBySlug(slug);
            console.log('Article data received:', data);
            setResult(data);
        } catch (err) {
            console.error('Error:', err);
            setError(err.message || 'Failed to fetch article');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Article Debug Tool</h2>
            
            <div className="mb-4 flex gap-4">
                <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="Enter article slug"
                    className="flex-1 border border-gray-300 rounded px-3 py-2"
                />
                <button 
                    onClick={testArticle}
                    disabled={loading}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    {loading ? 'Testing...' : 'Test Article'}
                </button>
            </div>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <strong>Error:</strong> {error}
                </div>
            )}

            {result && (
                <div className="bg-gray-100 p-4 rounded">
                    <h3 className="font-bold mb-2">Article Data:</h3>
                    <pre className="text-sm overflow-auto whitespace-pre-wrap">
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default ArticleDebug;