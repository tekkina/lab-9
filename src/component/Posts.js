import React from 'react';
import Post from './Post';

function Posts(props) {
 
  const resultPosts = props.posts.map(post => {
    return (<Post  
    key={post.id} 
    id={post.id} 
    title={post.title}
    content={post.content} 
    author={post.author}
    onPostSelect={props.selectedPost}/>);
  });

  return(
  <section className="posts"> 
  {resultPosts} 
  </section>)
}

export default Posts;
