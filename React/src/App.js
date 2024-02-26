import React, { useState } from 'react';

import './App.css';
import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';
import { func } from 'prop-types';

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts([{ id, title: newPost, like: false }, ...posts]);
    id += 1;
  }

  function removePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  function likePost(id) {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, like: !post.like } : post
      )
    );
  }

  return (
    <>
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          removePost={removePost}
          likePost={likePost}
        />
      ))}
    </>
  );
}

export default App;
