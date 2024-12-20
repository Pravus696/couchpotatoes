import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
//   const [user, setUser] = useState(null); // user
//   const [posts, showPosts] = useState([]); // user's posts
//   const [sits, totalSits] = useState(0); // user's likes
//   const [squats, totalSquats] = useState(0); // user's favorites
//   const [imageUrl, setImageUrl] = useState(""); // url of the image
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token"); // get JWT token from local storage
//         const response = await axios.get("/api/users/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//       } catch (error) {
//         console.error(error);
//         navigate("/login");
//       }
//     };
//   });
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {user ? (
        <div className="profile-details">
          <img
            src={user.profileImage}
            alt="User Profile"
            className="profile-image"
          />
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          {/* Add more user information here */}
        </div>
      ) : (
        <p>No user information available. Please log in.</p>
      )}
    </div>
  );
};

export default Profile;
