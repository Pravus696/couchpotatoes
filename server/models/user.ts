import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Define the interface for User documents
export interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
  isCorrectPassword: (password: string) => Promise<boolean>;
  bio?: string;
  profilePicture?: string;
  createdAt?: Date;
}

// Define the schema for Users
const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
  bio: { type: String, default: '' },
  profilePicture: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
}, {
  toJSON: {
    virtuals: true,
  },
});

// hash user pass
userSchema.pre('save', async function (next) {
  if (!this.isNew || !this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the password
userSchema.methods.isCorrectPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

// Create and export the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
