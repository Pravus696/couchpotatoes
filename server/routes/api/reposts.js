import express from 'express';
import Repost from '../../models/Repost';
import auth from '../../middleware/auth';


async function createRepost(cardId, content = '') {
  try {
    const response = await fetch(`${API_BASE_URL}/cards/${cardId}/repost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
  }, 
    body: JSON.stringify({ content })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create repost");
    }

    const data = await response.json();
    console.log("Repost created:", data);
    return data;
} catch (error) {
    console.error("Error creating repost:", error);
}
}