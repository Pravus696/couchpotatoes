import mongoose from "mongoose";

const RepostSchema = new mongoose.Schema(
    {
        cardId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Card",
            required: true,
        },
        content: {
            type: String,
            default: "",
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    }); 

    const Repost = mongoose.models.Repost || mongoose.model('Repost', RepostSchema);
    export default Repost;
    