import mongoose, { Schema } from "mongoose";
const postSchema = new Schema({
    _id: { type: String, required: true },
    type: {
        type: String,
        enum: ["Sofa", "Couch", "Loveseat", "Sectional", "Recliner"],
        required: true,
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
});
const Post = mongoose.model("Couch", postSchema);
export default Post;
