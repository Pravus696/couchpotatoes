import express from 'express';
import Like from '../../models/Like';
import auth from '../../middleware/auth';

const API_BASE_URL = 'your-api-base-url'; // Replace with your actual API base URL

/**
 * Adds a like to a card.
 *
 * @param {string} cardId - The ID of the card.
 * @param {string} userId - The ID of the user adding the like.
 * @returns {Promise<Like | null>} - The added like object, or null if an error occurred.
 */
async function addLikeToCard(cardId, userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/cards/${cardId}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: userId }),
    });

    if (!response.ok) {
      const error = await response.json();
      // More specific error handling could be implemented here
      throw new Error(error.error || 'Failed to add like');
    }

    const data = await response.json();
    console.log('Like added:', data);
    return data; 
  } catch (error) {
    console.error('Error adding like:', error);
    return null; // Or throw the error to be handled by the caller
  }
}

/**
 * Retrieves the number of likes for a card.
 *
 * @param {string} cardId - The ID of the card.
 * @returns {Promise<number | null>} - The number of likes, or null if an error occurred.
 */
async function getLikesCount(cardId) {
  try {
    const response = await fetch(`${API_BASE_URL}/cards/${cardId}/likes/count`);
    if (!response.ok) {
      const error = await response.json();
      // More specific error handling could be implemented here
      throw new Error(error.error || 'Failed to retrieve like count');
    }

    const data = await response.json();
    console.log(`Likes count for card ${cardId}:`, data.likes_count);
    return data.likes_count;
  } catch (error) {
    console.error('Error getting likes count:', error);
    return null; // Or throw the error to be handled by the caller
  }
}

// Example usage with authentication middleware (assuming auth is an Express middleware)
const router = express.Router();
router.post('/cards/:cardId/like', auth, async (req, res) => {
  const { cardId } = req.params;
  const userId = req.user.id; // Assuming your auth middleware sets req.user

  const like = await addLikeToCard(cardId, userId);
  if (like) {
    res.status(201).json(like);
  } else {
    res.status(500).json({ error: 'Failed to add like' });
  }
});