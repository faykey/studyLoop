import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
    {
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

        subject: {
            type: String,
            required: true,
        },

        tags: [String], // e.g., ['math', 'calculus']

        isAnonymous: {
            type: Boolean,
            default: false,
        },

        answers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Answer",
            },
        ],

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

const Question = mongoose.model("Question", questionSchema);
export default Question;
