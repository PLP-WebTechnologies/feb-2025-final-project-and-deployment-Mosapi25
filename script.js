:root {
  --primary-color: #5d4037;
  --secondary-color: #8d6e63;
  --accent-color: #ffcc80;
  --light-bg: #f9f5f0;
  --text-color: #333;
  --white: #ffffff;
  --light-gray: #d7ccc8;
  --shadow: 0 3px 10px rgba(0,0,0,0.1);
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  margin: 0;
  padding: 0;
  background-color: var(--light-bg);
}

/* Header & Navigation */
header {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 1rem 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

nav li {
  margin: 0 15px;
}

nav a {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  padding: 5px 0;
  position: relative;
}

nav a:hover {
  color: var(--accent-color);
}

nav a.active {
  color: var(--accent-color);
}

nav a.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-color);
}

/* Main Content */
main {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 20px;
}

h1 {
  color: var(--primary-color);
  border-bottom: 2px solid var(--light-gray);
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: var(--secondary-color);
}

h3 {
  color: var(--primary-color);
}

/* Shared Elements */
.feature-image {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: var(--shadow);
}

.btn {
  display: inline-block;
  background: var(--primary-color);
  color: var(--white);
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background: var(--secondary-color);
}

/* Home Page Specific */
.home-intro {
  text-align: center;
  margin-bottom: 40px;
}

/* About Page Specific */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Blog Page Specific */
.blog-post {
  background: var(--white);
  margin-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s;
}

.blog-post:hover {
  transform: translateY(-5px);
}

.post-header {
  padding: 20px 20px 0;
}

.post-meta {
  display: flex;
  gap: 15px;
  color: var(--secondary-color);
  font-size: 0.9em;
  margin-bottom: 15px;
}

.blog-post img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.post-content {
  padding: 20px;
}

.read-more {
  display: inline-block;
  margin-top: 15px;
  color: var(--primary-color);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
}

.read-more:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}

.pagination a {
  padding: 10px 20px;
  background: var(--primary-color);
  color: var(--white);
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s;
}

.pagination a:hover {
  background: var(--secondary-color);
}

/* Recipes Page Specific */
.recipe {
  background: var(--white);
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.recipe h2 {
  color: var(--secondary-color);
}

.recipe-meta {
  display: flex;
  gap: 15px;
  margin: 10px 0;
  color: var(--secondary-color);
  font-style: italic;
}

.recipe img {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
  margin: 15px 0;
}

/* Contact Page Specific */
.contact-form {
  background: var(--white);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  max-width: 600px;
  margin: 2rem auto;
  border: 1px solid #f0f0f0;
}

.contact-form h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  border-bottom: none;
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--secondary-color);
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  background-color: var(--white);
  box-shadow: 0 0 0 3px rgba(93, 64, 55, 0.1);
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.submit-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

.submit-btn:active {
  transform: translateY(0);
}

/* Error Message Styling */
.error {
  color: #d32f2f;
  font-size: 0.85rem;
  margin-top: 0.3rem;
  display: block;
}

/* Confirmation Message */
.confirmation {
  background: #4caf50;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1.5rem;
  text-align: center;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Floating Label Effect */
.form-group.floating-label {
  position: relative;
  padding-top: 1.5rem;
}

.form-group.floating-label label {
  position: absolute;
  top: 1.8rem;
  left: 15px;
  transition: all 0.3s ease;
  pointer-events: none;
  color: #999;
}

.form-group.floating-label input:focus + label,
.form-group.floating-label input:not(:placeholder-shown) + label,
.form-group.floating-label textarea:focus + label,
.form-group.floating-label textarea:not(:placeholder-shown) + label {
  top: 0.5rem;
  left: 10px;
  font-size: 0.8rem;
  color: var(--primary-color);
  background: var(--white);
  padding: 0 5px;
}

/* Footer */
footer {
  text-align: center;
  padding: 30px;
  background: var(--primary-color);
  color: var(--white);
  margin-top: 50px;
}

/* Responsive Design */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  .about-content {
    flex-direction: column;
  }

  .blog-post img,
  .recipe img {
    max-height: 250px;
  }

  .contact-form {
    padding: 1.5rem;
  }
}
