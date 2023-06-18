import React from 'react';

function Post(props) {
  const handlePostClick = () => {
    props.onPostSelect(props);
  }; 

  return (
    
    <div className="post" onClick={handlePostClick}>
      Id: {props.id}<br/>
      Title: {props.title}<br/>
      Content:{props.content}<br/>
      Author: {props.author}<br/>
      </div>
   
  )
}

export default Post