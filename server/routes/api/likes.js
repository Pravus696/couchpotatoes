import express from 'express';
import Like from '../../models/Like';
import auth from '../../middleware/auth';

async function addLike(cardId, userId) {
    try {
        const response = await fetch(`${API_BASE_URL}/cards/${cardId}/like`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: userId }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to add like");
        }

        const data = await response.json();
        console.log("Like added:", data);
        return data;
    } catch (error) {
        console.error("Error adding like:", error);
    }
}

async function getLikesCount(cardId) {
    try {
        const response = await fetch(`${API_BASE_URL}/cards/${cardId}/likes/count`);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to retrieve like count");
        }

        const data = await response.json();
        console.log(`Likes count for card ${cardId}:`, data.likes_count);
        return data.likes_count;
    } catch (error) {
        console.error("Error getting likes count:", error);
    }
}