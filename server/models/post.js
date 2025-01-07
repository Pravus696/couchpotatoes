import mongoose, { Schema } from "mongoose";
const postSchema = new Schema({
    _id: { type: String, required: true },
    type: {
        type: String,
        enum: ["Sofa", "Couch", "Loveseat", "Sectional", "Recliner"],
        required: true,
    },
    description: {
        type: String, required: true 
    }, 
    imageUrl: {
        type: String, required: false
    }, 
    content: String,
    images: [String],
    postedBy: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [
        {
            text: String,
            postedBy: { type: Schema.Types.ObjectId, ref: "User" },
        },
    ],
    squats: [{ type: Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;
