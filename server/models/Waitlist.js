import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        joinedAt: {
            type: Date,
            default: Date.now,
        },

        referredBy: {
            type: String, // optional referral code
        },

        source: {
            type: String, // e.g., "Twitter", "LinkedIn", "Newsletter"
        },
    },
    { timestamps: true }
);

const Waitlist = mongoose.model("Waitlist", waitlistSchema);
export default Waitlist;
