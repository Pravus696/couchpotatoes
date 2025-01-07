var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Couch, User, Post } from '../models/index.js';
// Get all posts
export const getAllPosts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Post.find()
            .populate("couch", "name type") // Populate related couch fields
            .populate("postedBy", "username") // Populate related user fields
            .populate("comments.postedBy", "username"); // Populate comment user fields
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch posts", details: error });
    }
});
// Create a new post
export const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, couchId, postedById } = req.body;
    try {
        // Validate that the couch and user exist
        const couch = yield Couch.findById(couchId);
        if (!couch) {
            res.status(404).json({ error: "Couch not found" });
            return;
        }
        const user = yield User.findById(postedById);
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
        const savedPost = yield post.save();
        res.status(201).json(savedPost);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create post", details: error });
    }
});
// Add a comment to a post
export const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId, text, postedById } = req.body;
    try {
        // Validate that the user exists
        const user = yield User.findById(postedById);
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        // Find the post and add the comment
        const post = yield Post.findById(postId);
        if (!post) {
            res.status(404).json({ error: "Post not found" });
            return;
        }
        // Ensure post.comments is an array
        if (!Array.isArray(post.comments)) {
            post.comments = [];
        }
        post.comments.push({ text, postedBy: postedById });
        const updatedPost = yield post.save();
        res.status(200).json(updatedPost);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to add comment", details: error });
    }
});
// Like a post
export const likePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId, userId } = req.body;
    try {
        // Find the post and add the user to likes if not already liked
        const post = yield Post.findById(postId);
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
            const updatedPost = yield post.save();
            res.status(200).json(updatedPost);
        }
        else {
            res.status(400).json({ error: "User has already liked this post" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Failed to like post", details: error });
    }
});
// Delete a post
export const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId } = req.params;
    try {
        const deletedPost = yield Post.findByIdAndDelete(postId);
        if (!deletedPost) {
            res.status(404).json({ error: "Post not found" });
            return;
        }
        res
            .status(200)
            .json({ message: "Post deleted successfully", post: deletedPost });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete post", details: error });
    }
});
