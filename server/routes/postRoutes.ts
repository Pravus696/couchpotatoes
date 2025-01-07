import express from 'express';
import {
  getAllPosts,
  createPost,
  addComment,
  likePost,
  deletePost,
} from '../controllers/postController';

const router = express.Router();

// Route to get all posts
router.get('/', getAllPosts);

// Route to create a new post
router.post('/', createPost);

// Route to add a comment to a post
router.post('/comment', addComment);

// Route to like a post
router.post('/like', likePost);

// Route to delete a post
router.delete('/:postId', deletePost);

export default router;
