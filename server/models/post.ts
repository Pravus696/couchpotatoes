import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  _id: string;
  type: "Sofa" | "Couch" | "Loveseat" | "Sectional" | "Recliner";
  content?: string;
  images?: string[];
  postedBy?: mongoose.Types.ObjectId;
  createdAt?: Date;
  likes?: mongoose.Types.ObjectId[];
  comments?: {
    text: string;
    postedBy: mongoose.Types.ObjectId;
  }[];
  squats?: mongoose.Types.ObjectId[];
}

const postSchema: Schema<IPost> = new Schema({
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

const Post = mongoose.model<IPost>("Couch", postSchema);

export default Post;