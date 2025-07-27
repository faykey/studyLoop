import UserAchievement from "../models/UserAchievement.js";
import Achievement from "../models/Achievement.js";

// 📌 Unlock an achievement for a user
export const unlockAchievement = async (req, res) => {
    try {
        const { achievementId } = req.body;

        // Check if the achievement exists
        const achievement = await Achievement.findById(achievementId);
        if (!achievement) return res.status(404).json({ message: "Achievement not found" });

        // Check if user already unlocked this achievement
        const alreadyUnlocked = await UserAchievement.findOne({
            user: req.user._id,
            achievement: achievementId,
        });

        if (alreadyUnlocked) {
            return res.status(400).json({ message: "Achievement already unlocked" });
        }

        const userAchievement = await UserAchievement.create({
            user: req.user._id,
            achievement: achievementId,
        });

        res.status(201).json({ message: "Achievement unlocked", userAchievement });
    } catch (error) {
        res.status(500).json({ message: "Failed to unlock achievement", error: error.message });
    }
};

// 📌 Get all achievements unlocked by the current user
export const getMyAchievements = async (req, res) => {
    try {
        const achievements = await UserAchievement.find({ user: req.user._id })
            .populate("achievement")
            .sort({ unlockedAt: -1 });

        res.status(200).json(achievements);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch user achievements", error: error.message });
    }
};

// 📌 Remove an unlocked achievement (optional)
export const removeAchievement = async (req, res) => {
    try {
        const { id } = req.params;
        const achievement = await UserAchievement.findById(id);

        if (!achievement) return res.status(404).json({ message: "Achievement not found" });

        // Ensure user owns this achievement record
        if (achievement.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized" });
        }

        await achievement.deleteOne();
        res.status(200).json({ message: "Achievement removed" });
    } catch (error) {
        res.status(500).json({ message: "Failed to remove achievement", error: error.message });
    }
};
