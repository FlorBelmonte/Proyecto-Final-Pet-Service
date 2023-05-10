import React from 'react'
import TarjetaBlog from '../tarjetaBlog/TarjetaBlog';
import "./blog.css"



const Blog = ({ posts }) => {
  
  return (
    <div className='blog'>
      {posts.map((post) => (
        <TarjetaBlog key={post.id} image={post.image} text={post.text} id={post.id} />
      ))}
    </div>
  );
};

export default Blog;