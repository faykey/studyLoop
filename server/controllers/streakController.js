import Streak from "../models/Streak.js";

// 📌 Get user's streak
export const getUserStreak = async (req, res) => {
    try {
        const streak = await Streak.findOne({ user: req.user._id });
        if (!streak) return res.status(404).json({ message: "Streak not found" });

        res.status(200).json(streak);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch streak", error: error.message });
    }
};

// 📌 Increment streak
export const incrementStreak = async (req, res) => {
    try {
        let streak = await Streak.findOne({ user: req.user._id });

        if (!streak) {
            streak = await Streak.create({
                user: req.user._id,
                currentStreak: 1,
                longestStreak: 1,
                lastStudiedAt: new Date(),
            });
            return res.status(201).json(streak);
        }

        const now = new Date();
        const lastStudied = streak.lastStudiedAt ? new Date(streak.lastStudiedAt) : null;

        // Check if last study was yesterday
        const diffDays = lastStudied
            ? Math.floor((now - lastStudied) / (1000 * 60 * 60 * 24))
            : null;

        if (diffDays === 1) {
            streak.currentStreak += 1;
        } else if (diffDays > 1 || diffDays === null) {
            streak.currentStreak = 1; // reset streak
            streak.brokenCount += 1;
        }

        if (streak.currentStreak > streak.longestStreak) {
            streak.longestStreak = streak.currentStreak;
        }

        streak.lastStudiedAt = now;
        await streak.save();

        res.status(200).json(streak);
    } catch (error) {
        res.status(500).json({ message: "Failed to increment streak", error: error.message });
    }
};

// 📌 Reset streak (manual reset)
export const resetStreak = async (req, res) => {
    try {
        const streak = await Streak.findOne({ user: req.user._id });
        if (!streak) return res.status(404).json({ message: "Streak not found" });

        streak.currentStreak = 0;
        streak.lastStudiedAt = null;
        streak.brokenCount += 1;
        await streak.save();

        res.status(200).json({ message: "Streak reset successfully", streak });
    } catch (error) {
        res.status(500).json({ message: "Failed to reset streak", error: error.message });
    }
};
