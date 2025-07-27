import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
    {
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
            required: true,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        content: {
            type: String,
            required: true,
            trim: true,
        },

        isAnonymous: {
            type: Boolean,
            default: false,
        },

        upvotes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Answer = mongoose.model("Answer", answerSchema);
export default Answer;
