import Waitlist from "../models/Waitlist.js";

// 📌 Add user to waitlist
export const joinWaitlist = async (req, res) => {
    try {
        const { fullName, email, referredBy, source } = req.body;

        // Check if user already exists in waitlist
        const existing = await Waitlist.findOne({ email });
        if (existing) return res.status(400).json({ message: "You are already on the waitlist." });

        const entry = await Waitlist.create({ fullName, email, referredBy, source });

        res.status(201).json({ message: "Successfully joined the waitlist!", entry });
    } catch (error) {
        res.status(500).json({ message: "Failed to join waitlist", error: error.message });
    }
};

// 📌 Get all waitlist entries (Admin only - placeholder for now)
export const getWaitlist = async (req, res) => {
    try {
        const entries = await Waitlist.find().sort({ joinedAt: -1 });
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch waitlist", error: error.message });
    }
};

// 📌 Remove user from waitlist (Admin only - placeholder)
export const removeFromWaitlist = async (req, res) => {
    try {
        const entry = await Waitlist.findById(req.params.id);
        if (!entry) return res.status(404).json({ message: "Entry not found" });

        await entry.deleteOne();
        res.status(200).json({ message: "Removed from waitlist" });
    } catch (error) {
        res.status(500).json({ message: "Failed to remove from waitlist", error: error.message });
    }
};
