import Streak from "../models/Streak.js";
import UserAchievement from "../models/UserAchievement.js";
import Achievement from "../models/Achievement.js";

// 📌 Unified streak + achievement summary
export const getFullStreakDetails = async (req, res) => {
    try {
        const userId = req.user._id;

        // 1. Get streak
        const streak = await Streak.findOne({ user: userId });
        if (!streak) {
            return res.status(404).json({ message: "Streak not found" });
        }

        // 2. Total study days
        const totalDays = streak.createdAt
            ? Math.floor((new Date() - new Date(streak.createdAt)) / (1000 * 60 * 60 * 24)) + 1
            : streak.currentStreak;

        // 3. Weekly activity (mocked as active for last N days)
        const weeklyActivity = Array(7).fill(false);
        const daysActive = Math.min(streak.currentStreak, 7);
        for (let i = 0; i < daysActive; i++) {
            weeklyActivity[6 - i] = true; // mark recent days
        }

        // 4. Achievements: all + earned
        const allAchievements = await Achievement.find({});
        const unlocked = await UserAchievement.find({ user: userId }).select("achievement");
        const unlockedIds = unlocked.map((ua) => ua.achievement.toString());

        const achievements = allAchievements.map((a) => ({
            title: a.title,
            days: parseInt(a.criteria.match(/\d+/)?.[0] || 0),
            earned: unlockedIds.includes(a._id.toString()),
        }));

        // 5. Respond
        res.status(200).json({
            currentStreak: streak.currentStreak,
            bestStreak: streak.longestStreak,
            totalDays,
            weeklyActivity,
            achievements,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to get full streak details",
            error: error.message,
        });
    }
};
