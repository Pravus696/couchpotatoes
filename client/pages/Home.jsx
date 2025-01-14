import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/Card.css";
import Card from "../components/Card";
import "../assets/styles/Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardImage, setCardImage] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts/recent");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log({ cardTitle, cardDescription, cardImage });
  
    // Create FormData object before using it
    const formData = new FormData();
    formData.append("url", cardImage); // Ensure 'cardImage' is properly set
    formData.append("delay", 1);
    formData.append("option", "compress");
    formData.append("quality", 80);
  
    try {
      // Axios POST request
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Post created:", response.data);
  
      // Update state
      setPosts([...posts, response.data]);
      setCardTitle("");
      setCardDescription("");
      setCardImage("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to CouchPotatoes!</h1>
      <p className="home-paragraph">
        Find your favorite couch, connect with fellow couch enthusiasts, and
        share your cozy moments!
      </p>

      <div className="sofa-list">
        {Array.isArray(posts) &&
          posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
            />
          ))}
        <div className="card">
          {cardImage && (
            <img src={cardImage} alt="Card" className="card-image" />
          )}
          {cardTitle && <h2 className="card-title">{cardTitle}</h2>}
          {cardDescription && (
            <p className="card-description">{cardDescription}</p>
          )}
        </div>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter card title"
          value={cardTitle}
          onChange={handleTitleChange}
          className="input-title"
        />
        <textarea
          placeholder="Enter card description"
          value={cardDescription}
          onChange={handleDescriptionChange}
          className="input-description"
        />
        <label htmlFor="file-input">
          <input
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleImageChange}
            className="input-file"
          />
          Choose File
        </label>
        <button type="submit" className="upload-button" onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  );
};

export default Home;
