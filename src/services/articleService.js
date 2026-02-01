import axios from "axios";

const API_BASE_URL = "https://articals-service-production.up.railway.app/api/articles"; 

// Create axios instance with better error handling
const apiClient = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Response interceptor to handle errors
apiClient.interceptors.response.use(
	(response) => response.data,
	(error) => {
		console.error('API Error:', error.response?.status, error.response?.data || error.message);
		throw error;
	}
);

export const getAllArticles = async () => {
	return await apiClient.get('');
};

export const getArticleBySlug = async (slug) => {
	return await apiClient.get(`/${slug}`);
};

export const createArticle = async (article) => {
	return await apiClient.post('', article);
};

export const deleteArticle = async (id) => {
	return await apiClient.delete(`/${id}`);
};