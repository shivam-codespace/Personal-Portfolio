import apiClient from "../config/axios";

const ARTICLES_ENDPOINT = "/articles";

export const createArticle = (articleRequest) => {
  // articleRequest should match backend ArticleRequest exactly:
  // { title, description, githubRawUrl, keywords }
  console.log("API.createArticle - Sending:", articleRequest);
  return apiClient.post(ARTICLES_ENDPOINT, articleRequest);
};

export const getAllArticles = () => {
  // Returns List<Article> - basic article info without content
  return apiClient.get(ARTICLES_ENDPOINT);
};

export const getArticleBySlug = (slug) => {
  // Returns ArticleResponse - with title, description, and markdown content
  return apiClient.get(`${ARTICLES_ENDPOINT}/${slug}`);
};

export const deleteArticle = (id) => {
  return apiClient.delete(`${ARTICLES_ENDPOINT}/${id}`);
};

export const fetchArticleBySlug = (slug) => {
  // Alias for getArticleBySlug
  return apiClient.get(`${ARTICLES_ENDPOINT}/${slug}`);
};
