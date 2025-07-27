import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Utility: Create JWT
const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};

// @desc    Register new user
export const registerUser = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const user = await User.create({ fullName, email, password });
        const token = generateToken(user);

        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            token,
        });
    } catch (err) {
        res.status(500).json({ message: "Registration failed", error: err.message });
    }
};

// @desc    Login user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            token,
        });
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err.message });
    }
};

// @desc    Get current logged-in user profile
export const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
};
