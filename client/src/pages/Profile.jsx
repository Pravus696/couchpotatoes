import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Profile.css";
import NavBar from "../components/NavBar"; // Adjust the path to where NavBar is located

const Profile = () => {
  const [user, setUser] = useState(null); // user
  const [posts, showPosts] = useState([]); // user's posts
  const [sits, totalSits] = useState(0); // user's likes
  const [squats, totalSquats] = useState(0); // user's favorites
  const [imageUrl, setImageUrl] = useState(""); // url of the image
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // get JWT token from local storage
        const response = await axios.get("/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user); // set user data
        showPosts(response.data.posts); // set user's posts
        totalSits(response.data.sits); // set user's likes
        totalSquats(response.data.squats); // set user's favorites
        setImageUrl(response.data.profileImage); // set user's profile image URL
      } catch (error) {
        console.error(error);
        navigate("/login"); // navigate to login page on error
      }
    };

    fetchUser(); // call fetchUser function
  }, [navigate]);

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-details">
          <img
            src={imageUrl || user.profileImage}
            alt="User Profile"
            className="profile-image"
          />
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <p>Posts: {user.posts}</p>
          <p>Sits: {user.sits}</p>
          <p>Squats: {user.squats}</p>
          {/* Add more user information here */}
        </div>
      ) : (
        <div>
        <p>No user information available. Please log in.</p>
        <button className="login-button" onClick={() => navigate("/login")}>Login</button>
        </div>
      )}

    </div>
  );
};

export default Profile;
