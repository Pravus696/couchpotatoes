import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Card.css';

const Card = ({ title, image, description, postId }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [repostCount, setRepostCount] = useState(0);
  const [isReposted, setIsReposted] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch(`/api/get_likes?postId=${postId}`);
        const data = await response.json();
        setLikeCount(data.count);
        setIsLiked(data.currentUserLiked); 
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    const fetchReposts = async () => {
      try {
        const response = await fetch(`/api/get_reposts?postId=${postId}`);
        const data = await response.json();
        setRepostCount(data.count);
        setIsReposted(data.currentUserReposted); 
      } catch (error) {
        console.error('Error fetching reposts:', error);
      }
    };

    fetchLikes();
    fetchReposts();
  }, [postId]);

  const handleLike = async () => {
    try {
      const response = await fetch('/api/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId }),
      });

      if (response.ok) {
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
        setIsLiked(!isLiked);
      } else {
        console.error('Error liking/unliking post');
      }
    } catch (error) {
      console.error('Error liking/unliking post:', error);
    }
  };

  const handleRepost = async () => {
    try {
      const response = await fetch('/api/repost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId }),
      });

      if (response.ok) {
        setRepostCount(isReposted ? repostCount - 1 : repostCount + 1);
        setIsReposted(!isReposted);
      } else {
        console.error('Error reposting/unreposting');
      }
    } catch (error) {
      console.error('Error reposting/unreposting:', error);
    }
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">Learn More</button>

        <div className="interactions">
          <button type="button" className="like-container" onClick={handleLike}>
            <span className={`like-icon ${isLiked ? 'liked' : ''}`}>
              {/* Replace with your actual like icon (SVG, image, etc.) */}
              ❤️ 
            </span>
            <span className="like-count">{likeCount}</span>
          </button>

          <button type="button" className="repost-container" onClick={handleRepost}>
            <span className={`repost-icon ${isReposted ? 'reposted' : ''}`}>
              {/* Replace with your actual repost icon (SVG, image, etc.) */}
              🔄 
            </span>
            <span className="repost-count">{repostCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired, 
};

export default Card;