import React from 'react';
import { NavLink } from 'react-router-dom';

const Blogdetails = ({ post }) => {
  // If post data is not yet available, display a loading spinner
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <span>{post.title}</span>
      </NavLink>
      <p>
        By <span>{post.author}</span> on{' '}
        <NavLink to={`/categories/${post.category.replaceAll(' ', '-')}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p>Posted on {post.date}</p>
      <p>{post.content}</p>
      <div>
        {post.tag &&
          post.tag.map((tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(' ', '-')}`}>
              <span>{`#${tag}`}</span>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Blogdetails;
