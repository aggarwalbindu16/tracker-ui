import React from 'react';
import './BlogPost.css';

const BlogPost: React.FC = () => {
  return (
    <article className="blog-post">
      <h1>Creating Your First React Application: A Beginner's Guide</h1>
      
      <section className="blog-section">
        <h2>1. Setting Up Your Development Environment</h2>
        <p>Before you start building your React application, you'll need:</p>
        <ul>
          <li>Node.js and npm installed on your computer</li>
          <li>A code editor (like VS Code)</li>
          <li>Basic knowledge of HTML, CSS, and JavaScript</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>2. Creating a New React Project</h2>
        <p>Use Create React App to bootstrap your project:</p>
        <pre>
          <code>
            npx create-react-app my-app --template typescript
            cd my-app
            npm start
          </code>
        </pre>
      </section>

      <section className="blog-section">
        <h2>3. Understanding Project Structure</h2>
        <p>Your React project includes:</p>
        <ul>
          <li>src/: Source code directory</li>
          <li>public/: Static files</li>
          <li>package.json: Dependencies and scripts</li>
          <li>tsconfig.json: TypeScript configuration</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>4. Creating Your First Component</h2>
        <p>Components are the building blocks of React applications. Here's a simple example:</p>
        <pre>
          <code>
{`import React from 'react';

const Welcome: React.FC = () => {
  return <h1>Welcome to React!</h1>;
};

export default Welcome;`}
          </code>
        </pre>
      </section>

      <section className="blog-section">
        <h2>5. Next Steps</h2>
        <p>To continue learning React:</p>
        <ul>
          <li>Practice creating more components</li>
          <li>Learn about state and props</li>
          <li>Explore React hooks</li>
          <li>Add routing to your application</li>
        </ul>
      </section>
    </article>
  );
};

export default BlogPost;
