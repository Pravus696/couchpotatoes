import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/Card.css';
import Card from '../components/Card';
import '../assets/styles/Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardImage, setCardImage] = useState('');

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

  const handleTitleChange = (event) => {
    setCardTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setCardDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCardImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to CouchPotatoes!</h1>
      <p className="home-paragraph">Find your favorite couch, connect with fellow couch enthusiasts, and share your cozy moments!</p>
      
      <div className="sofa-list">
        {Array.isArray(posts) && posts.map((post) => (
          <Card key={post.id} title={post.title} description={post.description} imageUrl={post.imageUrl} />
        ))}
        <div className="card">
          {cardImage && <img src={cardImage} alt="Card" className="card-image" />}
          {cardTitle && <h2 className="card-title">{cardTitle}</h2>}
          {cardDescription && <p className="card-description">{cardDescription}</p>}
        </div>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter card title"
          value={cardTitle}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Enter card description"
          value={cardDescription}
          onChange={handleDescriptionChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default Home;
