import { Request, Response } from 'express';
import { Couch, User, Post } from '../models/index.ts';

// Get all posts
export const getAllPosts = async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const posts = await Post.find()
        .populate("couch", "name type") // Populate related couch fields
        .populate("postedBy", "username") // Populate related user fields
        .populate("comments.postedBy", "username"); // Populate comment user fields
  
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts", details: error });
    }
  };
  
  // Create a new post
  export const createPost = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { content, couchId, postedById } = req.body;
  
    try {
      // Validate that the couch and user exist
      const couch = await Couch.findById(couchId);
      if (!couch) {
        res.status(404).json({ error: "Couch not found" });
        return;
      }
  
      const user = await User.findById(postedById);
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }
  
      // Create the post
      const post = new Post({
        content,
        couch: couchId,
        postedBy: postedById,
      });
  
      const savedPost = await post.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(500).json({ error: "Failed to create post", details: error });
    }
  };
  
  // Add a comment to a post
  export const addComment = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { postId, text, postedById } = req.body;
  
    try {
      // Validate that the user exists
      const user = await User.findById(postedById);
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }
  
      // Find the post and add the comment
      const post = await Post.findById(postId);
      if (!post) {
        res.status(404).json({ error: "Post not found" });
        return;
      }
  
      // Ensure post.comments is an array
      if (!Array.isArray(post.comments)) {
        post.comments = [];
      }
  
      post.comments.push({ text, postedBy: postedById });
      const updatedPost = await post.save();
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: "Failed to add comment", details: error });
    }
  };
  
  // Like a post
  export const likePost = async (req: Request, res: Response): Promise<void> => {
    const { postId, userId } = req.body;
  
    try {
      // Find the post and add the user to likes if not already liked
      const post = await Post.findById(postId);
      if (!post) {
        res.status(404).json({ error: "Post not found" });
        return;
      }
      // Ensure post.likes is an array
      if (!Array.isArray(post.likes)) {
        post.likes = [];
      }
  
      if (!post.likes.includes(userId)) {
        post.likes.push(userId);
        const updatedPost = await post.save();
        res.status(200).json(updatedPost);
      } else {
        res.status(400).json({ error: "User has already liked this post" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to like post", details: error });
    }
  };
  
  // Delete a post
  export const deletePost = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { postId } = req.params;
  
    try {
      const deletedPost = await Post.findByIdAndDelete(postId);
  
      if (!deletedPost) {
        res.status(404).json({ error: "Post not found" });
        return;
      }
  
      res
        .status(200)
        .json({ message: "Post deleted successfully", post: deletedPost });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete post", details: error });
    }
  };
  