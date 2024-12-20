import mongoose, { Schema, Document } from 'mongoose';

export interface ICouch extends Document {
  name: string;
  type: 'Sofa' | 'Couch' | 'Loveseat' | 'Sectional' | 'Recliner';
  description?: string;
  material: string;
  color?: string;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  images?: string[];
  postedBy?: mongoose.Types.ObjectId;
  createdAt?: Date;
}

const couchSchema: Schema<ICouch> = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['Sofa', 'Couch', 'Loveseat', 'Sectional', 'Recliner'],
    required: true,
  },
  description: String,
  material: { type: String, required: true },
  color: String,
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
  },
  images: [String],
  postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

export const Couch = mongoose.model<ICouch>('Couch', couchSchema);
