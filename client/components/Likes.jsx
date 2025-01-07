import React, { useState, useEffect } from 'react';

function LikeButton({ postId }) {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Fetch initial like count from the backend
    const fetchLikes = async () => {
      try {
        const response = await fetch(`/api/get_likes?postId=${postId}`);
        const data = await response.json();
        setLikeCount(data.count);
        // Check if the current user has liked the post (you'll need to implement this logic)
        setIsLiked(data.currentUserLiked); 
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    fetchLikes();
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

  return (
    <div className="like-container">
      <button
        className={`fa fa-heart like-icon ${isLiked ? 'liked' : ''}`}
        onClick={handleLike}
        aria-pressed={isLiked}
      ></button>
      <span className="like-count">{likeCount}</span>
    </div>
  );
}

export default LikeButton;