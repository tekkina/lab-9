import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Posts from './Posts';
import PostDetail from './PostDetail';
import Icon from './Icon';
import SignInForm from './SignInForm';
import ActionLinks from './ActionLinks';


function Dashboard() {
  const [flag, setFlag] = useState(true);
  const [posts, setPostsState] = useState([]);
  const sortedPosts = [...posts].sort((a, b) => a.id - b.id);
  const fetchProducts = () => {
    axios.get('http://localhost:9091/api/v1/users/1/posts')
        .then(response => {
            setPostsState(response.data);
        })
        .catch(error => {
            console.log(error.message)
        })
}


useEffect(() => {
    fetchProducts()
}, [flag]);

const flagHandler = () => {
  setFlag(!flag);
}

  const [newIndex, setNewIndex] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const addPost = () => {
    if (newTitle.trim() !== '' || newAuthor.trim() !== '' || newContent.trim()!=='') { 

    const newPost = ()=> {
      return{
      title:newTitle,
      content:newContent,
      author:newAuthor
    }
  };
      axios.post('http://localhost:9091/api/v1/users/1/posts', newPost())
        .then((response) => {
          setPostsState(response.data);
          flagHandler();
        })
        .catch((error) => {
          console.error('Error adding post:', error);
        });
          setNewIndex('');
          setNewTitle('');
          setNewContent('');
          setNewAuthor('');
     }
  };

  // const changePost = () => {
  //   if (newIndex.trim() !== '') {
  //     //const updatedPosts = [...posts]; // Assign posts to updatedPosts
  //     const update = {};
  //     for (let e in posts) {
  //       if (posts[e].id == newIndex.trim()) {
  //          (newTitle !== '') ? update.title = newTitle:update.title = posts[e].title;
  //          (newContent !== '') ?  update.content =newContent: update.content = posts[e].content;
  //          (newAuthor !== '') ? update.author =newAuthor: update.author = posts[e].author;
  //         axios
  //           .put(`http://localhost:9091/api/v1/users/1/posts/${newIndex}`, update)
  //           .then(() => {
  //             flagHandler();
  //             setPostsState(posts);
  //           })
  //           .catch((error) => {
  //             console.error('Error updating post:', error);
  //           });
  //         break;
  //       }
  //     }
  //     setNewIndex('');
  //     setNewTitle('');
  //     setNewContent('');
  //     setNewAuthor('');
  //   }
  // };
  const changePost = () => {
    if (newIndex.trim() !== '') {
      const updatedPosts = [...posts]; // Create a copy of the original posts array
      for (let e in updatedPosts) {
        if (updatedPosts[e].id === newIndex.trim()) {
          if (newTitle !== '') updatedPosts[e].title = newTitle;
          if (newContent !== '') updatedPosts[e].content = newContent;
          if (newAuthor !== '') updatedPosts[e].author = newAuthor;
  
          axios
            .put(`http://localhost:9091/api/v1/users/1/posts/${newIndex}`, updatedPosts[e])
            .then(() => {
              // Update the state with the updated array
              setPostsState(updatedPosts);
            })
            .catch((error) => {
              console.error('Error updating post:', error);
            });
          break;
        }
      }
      setNewIndex('');
      setNewTitle('');
      setNewContent('');
      setNewAuthor('');
    }
  };
 
  const handleIndex = (e) => {
    setNewIndex(e.target.value);
  };

  const handleTitle = (e) => {
    setNewTitle(e.target.value);
  };
    const handleContent = (e) => {
      setNewContent(e.target.value);
    };
  
    const handleAuthor = (e) => {
      setNewAuthor(e.target.value);
    };
  
    const [selectedPost, setSelectedPost] = useState({});
  
    const handlePostSelection = (value) => {
      setSelectedPost(value);
     
    };
    const handleEdit = () => {
   
    };

    const handleDelete = () => {
      axios.delete(`http://localhost:9091/api/v1/users/1/posts/${selectedPost.id}`)
          .then(response => {
            fetchProducts();
            setSelectedPost({});
          })
          .catch(error => {
              console.log(error.message)
          })
  };
const icon = ["apple", "google", "android", "alibaba", ""];
  
    return (
      <div>
        <ActionLinks />
        <Posts posts={sortedPosts} selectedPost={handlePostSelection} />
        <fieldset>
          <label>Id:</label>
          <input type="text" value={newIndex} onChange={handleIndex} /><br />
          <label>Title:</label>
          <input type="text" value={newTitle} onChange={handleTitle} /><br />
          <label>Content:</label>
          <input type="text" value={newContent} onChange={handleContent} /><br />
          <label>Author:</label>
          <input type="text" value={newAuthor} onChange={handleAuthor} /><br />
          <button className="button" onClick={addPost}>Add New Post</button>
          <button className="button" onClick={changePost}>Change Post</button>
        </fieldset>
        <div>
        <PostDetail post={selectedPost} />
        <button className="button" onClick={handleEdit}>Edit</button>
        <button className="button" onClick={handleDelete}>Delete</button>
        </div>
        <Icon icon={icon} />
        <SignInForm className="forms" />
      </div>
    );
  }
  export default Dashboard;

