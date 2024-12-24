import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../assets/styles/Card.css';
import '../assets/styles/Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts/recent');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to CouchPotatoes!</h1>
      <p className="home-paragraph">Find your favorite couch, connect with fellow couch enthusiasts, and share your cozy moments!</p>
      
      <div className="sofa-list">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
