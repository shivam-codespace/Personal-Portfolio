# Personal Portfolio - Enhanced Reactfolio 🚀

A modern, responsive React portfolio website with dynamic article management and full backend integration. Built on the foundation of Reactfolio with enhanced features for professional developers.

<center>
<img src="https://cdn.tharindu.dev/reactfolio.jpg" alt="Enhanced Portfolio" />
</center>

## 🌟 Enhanced Features

### ✨ New Backend Integration
- **Dynamic Article Management**: Create, read, update, and delete articles via REST API
- **Markdown Support**: Full markdown rendering with syntax highlighting
- **File Upload**: Upload `.md` files directly to create articles
- **Real-time Updates**: Instant article updates without page refresh
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Loading States**: Professional loading indicators for all async operations

### 🛡️ Improved Architecture
- **Axios Configuration**: Centralized HTTP client with interceptors
- **Environment Variables**: Configurable API endpoints
- **Error Boundaries**: Graceful error handling throughout the app
- **Service Layer**: Clean separation of API logic and business logic
- **CORS Handling**: Proper proxy setup for development

### 📱 Original Reactfolio Features
- 📖 Multi-Page Layout (Home, About, Projects, Articles, Contact)
- 📱 Fully Responsive Design
- 🛠 Easy Configuration
- 🎨 Modern UI with Tailwind CSS
- 📈 Google Analytics Integration
- 🔍 SEO Optimized

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks
- **React Router DOM 6.11.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Markdown 9.1.0** - Markdown rendering with syntax highlighting
- **Axios 1.13.2** - HTTP client with interceptors
- **FontAwesome** - Professional icon library
- **React Helmet** - SEO and meta tag management

### Backend (Setup Required)
- **Node.js + Express** - RESTful API server
- **MongoDB** - Document database for articles
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Personal-Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
REACT_APP_API_BASE_URL=http://localhost:8080/api
REACT_APP_BACKEND_URL=http://localhost:8080
```

### 4. Backend Setup
**Important**: Follow the [Backend Setup Guide](./BACKEND_SETUP.md) to set up your backend server for full functionality.

### 5. Start Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🏗️ Project Structure

```
Personal-Portfolio/
├── public/                 # Static assets
├── src/
│   ├── api/               # API layer (NEW)
│   │   └── articleApi.js  # Article API endpoints
│   ├── components/        # Reusable components
│   │   ├── articles/      # Article-specific components (ENHANCED)
│   │   ├── common/        # Shared components + ErrorBoundary (NEW)
│   │   ├── homepage/      # Homepage components
│   │   ├── projects/      # Project components
│   │   └── skills/        # Skills components
│   ├── config/            # Configuration files (NEW)
│   │   └── axios.js       # Axios configuration with interceptors
│   ├── data/              # Static data (original)
│   ├── pages/             # Page components (ENHANCED)
│   ├── services/          # Business logic (NEW)
│   │   └── articleService.js
│   ├── App.jsx            # Main app component (ENHANCED)
│   └── index.js           # Entry point
├── .env                   # Environment variables (NEW)
├── BACKEND_SETUP.md       # Backend setup guide (NEW)
├── package.json           # Dependencies (UPDATED)
└── tailwind.config.js     # Tailwind configuration
```

## ⚙️ Configuration

### API Configuration (NEW)
The application uses environment variables for API configuration:
- `REACT_APP_API_BASE_URL`: Backend API base URL
- `REACT_APP_BACKEND_URL`: Backend server URL

### Original Configurations
Directory: `/src/data/`

- **`user.js`**: Personal information and content for each page
- **`articles.js`**: Static articles (now enhanced with dynamic articles)
- **`seo.js`**: SEO metadata for each page
- **`tracking.js`**: Google Analytics configuration

## 🚀 Usage

### Enhanced Article Management
1. **View Articles**: Navigate to `/articles` to see all articles (static + dynamic)
2. **Create Article**: Click "Add Article" or go to `/articles/create`
3. **Upload Markdown**: Use the file upload feature to create articles from `.md` files
4. **Read Articles**: Click on any article to read the full markdown content

### Original Navigation
- **Home**: Portfolio overview and featured articles
- **About**: Personal information and background
- **Skills**: Technical skills and expertise
- **Projects**: Portfolio projects showcase
- **Articles**: Enhanced dynamic article management
- **Contact**: Contact information and form

## 🔌 API Integration

The frontend expects these backend endpoints:

- `GET /api/articles` - Get all articles
- `GET /api/articles/:slug` - Get article by slug
- `POST /api/articles` - Create new article
- `DELETE /api/articles/:id` - Delete article

## 🛡️ Error Handling (NEW)

Comprehensive error handling includes:
- **Error Boundaries**: Catch and display React errors gracefully
- **API Error Handling**: Axios interceptors for consistent error responses
- **Loading States**: User feedback during async operations
- **Retry Mechanisms**: Allow users to retry failed operations
- **Network Error Detection**: Handle offline/connection issues

## 📈 Google Analytics

Add your Google Analytics 4 MEASUREMENT ID to `/src/data/tracking.js`.

## 🚀 Building and Deployment

### Frontend Build
```bash
npm run build
```

### Backend Deployment
Follow the [Backend Setup Guide](./BACKEND_SETUP.md) for deployment instructions.

### Environment Variables for Production
Update your `.env` file with production API URLs:
```env
REACT_APP_API_BASE_URL=https://your-backend-domain.com/api
REACT_APP_BACKEND_URL=https://your-backend-domain.com
```

## 🆘 Troubleshooting

### Common Issues
1. **CORS Errors**: Ensure backend CORS is configured correctly
2. **API Connection**: Check backend server is running on correct port (8080)
3. **Build Errors**: Clear `node_modules` and reinstall dependencies
4. **Articles Not Loading**: Verify backend is running and API endpoints are accessible

### Development vs Production
- **Development**: Uses proxy configuration in `package.json`
- **Production**: Requires proper CORS setup on backend

## 🤔 FAQ

**Q1. Articles are not loading from the backend**
- Ensure your backend server is running on port 8080
- Check the [Backend Setup Guide](./BACKEND_SETUP.md)
- Verify API endpoints are accessible

**Q2. File upload not working**
- Check file size (max 5MB)
- Ensure file has `.md` or `.markdown` extension
- Verify backend is configured to handle file uploads

**Q3. Subpages not accessible through direct links**
For Apache servers, add to `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## 🌱 Contribution

This enhanced version builds upon the original Reactfolio. Contributions are welcome:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Credits

Built on the foundation of [Reactfolio](https://github.com/tharindu-dev/reactfolio) by Tharindu Nayanajith, enhanced with modern backend integration and improved architecture.

---

**Ready to showcase your work with a professional, dynamic portfolio!** 🎯
