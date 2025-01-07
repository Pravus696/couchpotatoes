import express from 'express';
import Repost from '../../models/Repost';
import auth from '../../middleware/auth';
import dotenv from 'dotenv';

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;

/**
 * Creates a repost of a card.
 *
 * @param {string} cardId - The ID of the card to repost.
 * @param {string} [content=''] - Optional content for the repost.
 * @returns {Promise<Repost | null>} - The created repost object, or null if an error occurred.
 */
async function createRepost(cardId, content = '') {
  try {
    const response = await fetch(`${API_BASE_URL}/cards/${cardId}/repost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      const error = await response.json();
      // More specific error handling could be implemented here
      throw new Error(error.error || 'Failed to create repost');
    }

    const data = await response.json();
    console.log('Repost created:', data);
    return data;
  } catch (error) {
    console.error('Error creating repost:', error);
    return null; // Or throw the error to be handled by the caller
  }
}

// Example usage with authentication middleware
const router = express.Router();
router.post('/cards/:cardId/repost', auth, async (req, res) => {
  const { cardId } = req.params;
  const content = req.body.content || ''; // Get content from request body

  const repost = await createRepost(cardId, content);
  if (repost) {
    res.status(201).json(repost);
  } else {
    res.status(500).json({ error: 'Failed to create repost' });
  }
});

export default router; // Or use the router as needed in your application