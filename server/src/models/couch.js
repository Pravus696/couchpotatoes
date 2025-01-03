import mongoose, { Schema } from 'mongoose';
const couchSchema = new Schema({
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
const Couch = mongoose.model('Couch', couchSchema);
export default Couch;
