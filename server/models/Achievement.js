import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },

        icon: {
            type: String, // e.g., URL or icon name
        },

        criteria: {
            type: String, // e.g., "Complete 10 sessions", "7-day streak"
        },
    },
    { timestamps: true }
);

const Achievement = mongoose.model("Achievement", achievementSchema);
export default Achievement;
