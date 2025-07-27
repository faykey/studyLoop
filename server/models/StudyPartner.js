import mongoose from "mongoose";

const studyPartnerSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true, // one entry per user
        },

        subjects: [
            {
                type: String,
                trim: true,
            },
        ],

        preferredStudyTimes: {
            type: String, // e.g., "Evenings", "Weekends", "Flexible"
            default: "Flexible",
        },

        timezone: {
            type: String,
            default: "UTC",
        },

        isLookingForPartner: {
            type: Boolean,
            default: true,
        },

        matchedPartner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        matchStatus: {
            type: String,
            enum: ["pending", "matched", "declined", "none"],
            default: "none",
        },

        notes: {
            type: String,
            trim: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const StudyPartner = mongoose.model("StudyPartner", studyPartnerSchema);
export default StudyPartner;
