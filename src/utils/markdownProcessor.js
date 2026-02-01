// Utility to process markdown content and fix GitHub relative URLs
export const processGitHubMarkdown = (content, githubRawUrl) => {
  if (!content || !githubRawUrl) return content;

  try {
    // Extract repository info from the raw URL
    // Example: https://raw.githubusercontent.com/user/repo/branch/README.md
    const urlParts = githubRawUrl.split('/');
    const user = urlParts[3];
    const repo = urlParts[4];
    const branch = urlParts[5];
    
    if (!user || !repo || !branch) return content;

    const baseGitHubUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}`;
    const repoUrl = `https://github.com/${user}/${repo}`;

    let processedContent = content;

    // Fix relative image URLs
    // Convert ./image.png or image.png to full GitHub raw URLs
    processedContent = processedContent.replace(
      /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
      (match, alt, src) => {
        // Remove leading ./ if present
        const cleanSrc = src.replace(/^\.\//, '');
        return `![${alt}](${baseGitHubUrl}/${cleanSrc})`;
      }
    );

    // Fix relative links to other files in the repo
    processedContent = processedContent.replace(
      /\[([^\]]+)\]\((?!https?:\/\/)([^)]+\.md)\)/g,
      (match, text, src) => {
        const cleanSrc = src.replace(/^\.\//, '');
        return `[${text}](${repoUrl}/blob/${branch}/${cleanSrc})`;
      }
    );

    // Fix video embeds (if they use relative paths)
    processedContent = processedContent.replace(
      /<video[^>]*src="(?!https?:\/\/)([^"]+)"([^>]*)>/g,
      (match, src, rest) => {
        const cleanSrc = src.replace(/^\.\//, '');
        return `<video src="${baseGitHubUrl}/${cleanSrc}"${rest}>`;
      }
    );

    // Fix source tags in video elements
    processedContent = processedContent.replace(
      /<source[^>]*src="(?!https?:\/\/)([^"]+)"([^>]*)>/g,
      (match, src, rest) => {
        const cleanSrc = src.replace(/^\.\//, '');
        return `<source src="${baseGitHubUrl}/${cleanSrc}"${rest}>`;
      }
    );

    return processedContent;
  } catch (error) {
    console.error('Error processing GitHub markdown:', error);
    return content;
  }
};

// Custom components for ReactMarkdown to handle videos
export const markdownComponents = {
  // Custom image component with error handling and lazy loading
  img: ({ src, alt, ...props }) => (
    <img
      src={src}
      alt={alt}
      {...props}
      loading="lazy"
      onError={(e) => {
        console.warn('Failed to load image:', src);
        e.target.style.border = '2px dashed #d1d5db';
        e.target.style.padding = '24px';
        e.target.style.textAlign = 'center';
        e.target.style.backgroundColor = '#f9fafb';
        e.target.style.borderRadius = '8px';
        e.target.alt = `❌ Failed to load: ${alt || 'Image'}`;
      }}
    />
  ),
  
  // Enhanced link component
  a: ({ href, children, ...props }) => {
    const isExternal = href && (href.startsWith('http') || href.startsWith('https'));
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          {...props}
        >
          {children}
          <span className="ml-1 text-xs">↗</span>
        </a>
      );
    }
    return <a href={href} {...props}>{children}</a>;
  },

  // Enhanced code component
  code: ({ inline, className, children, ...props }) => {
    if (inline) {
      return (
        <code 
          className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
          {...props}
        >
          {children}
        </code>
      );
    }
    
    return (
      <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto mb-4">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    );
  },

  // Enhanced blockquote component
  blockquote: ({ children, ...props }) => (
    <blockquote 
      className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700 rounded-r-lg"
      {...props}
    >
      {children}
    </blockquote>
  )
};