import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for User documents
export interface IUser extends Document {
  username: string;
  email: string;
  bio?: string;
  profilePicture?: string;
  createdAt?: Date;
}

// Define the schema for Users
const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String, default: '' },
  profilePicture: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

// Create and export the User model
export const User = mongoose.model<IUser>('User', userSchema);
