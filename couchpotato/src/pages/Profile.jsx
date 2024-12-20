import { useContext } from 'react';
import { AppContext } from '../App';
import './Profile.css';

const Profile = () => {
  const { state } = useContext(AppContext);
  const { user } = state;

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {user ? (
        <div className="profile-details">
          <img src={user.profileImage} alt="User Profile" className="profile-image" />
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
