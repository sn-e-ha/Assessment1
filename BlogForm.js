import { useState } from 'react';

function BlogForm() {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(blogName, description, authorName);
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="blog-name">Blog Name</label>
          <input
            type="text"
            id="blog-name"
            value={blogName}
            onChange={event => setBlogName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={event => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="author-name">Author Name</label>
          <input
            type="text"
            id="author-name"
            value={authorName}
            onChange={event => setAuthorName(event.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default BlogForm;