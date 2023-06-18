import React from 'react';

function PostDetail(props) {
  const { post} = props;
  const { id, title,content, author } = post;

  //you can destructure it and letter on pull the 
  //attributes as they are or use dot notation and avoid destructuring of the post object
  //const { id, title, author } = post;
  
  return (
    <div className="post-detail">
      <h2>Post Details</h2>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Content:{content}</p>
      <p>Author: {author}</p>
    </div>
  );
}

export default PostDetail;