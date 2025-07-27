import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
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

    password: {
        type: String,
        required: true,
    },

    isAnonymousByDefault: {
        type: Boolean,
        default: false,
    },

    emailNotifications: {
        type: Boolean,
        default: true,
    },

    darkMode: {
        type: Boolean,
        default: false,
    },

    streakCount: {
        type: Number,
        default: 0,
    },

    lastStreakDate: {
        type: Date,
    },

    achievements: [
        {
            type: String, // Or ObjectId if you want to link to a separate Badge model
        },
    ],

    partnerPreferences: {
        subjects: [String],
        dreamCareer: String,
    },

    stats: {
        questionsAsked: {
            type: Number,
            default: 0,
        },
        answersGiven: {
            type: Number,
            default: 0,
        },
    },

    joinedAt: {
        type: Date,
        default: Date.now,
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
});

// 🔐 Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// 🔓 Method to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
