import Achievement from "../models/Achievement.js";

// 📌 Create a new achievement
export const createAchievement = async (req, res) => {
    try {
        const { title, description, icon, criteria } = req.body;

        const achievement = await Achievement.create({
            title,
            description,
            icon,
            criteria,
        });

        res.status(201).json(achievement);
    } catch (error) {
        res.status(500).json({ message: "Failed to create achievement", error: error.message });
    }
};

// 📌 Get all achievements
export const getAllAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find().sort({ createdAt: -1 });
        res.status(200).json(achievements);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch achievements", error: error.message });
    }
};

// 📌 Get a single achievement by ID
export const getAchievementById = async (req, res) => {
    try {
        const achievement = await Achievement.findById(req.params.id);
        if (!achievement) return res.status(404).json({ message: "Achievement not found" });

        res.status(200).json(achievement);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch achievement", error: error.message });
    }
};

// 📌 Update an achievement
export const updateAchievement = async (req, res) => {
    try {
        const { title, description, icon, criteria } = req.body;

        const achievement = await Achievement.findById(req.params.id);
        if (!achievement) return res.status(404).json({ message: "Achievement not found" });

        achievement.title = title || achievement.title;
        achievement.description = description || achievement.description;
        achievement.icon = icon || achievement.icon;
        achievement.criteria = criteria || achievement.criteria;

        const updatedAchievement = await achievement.save();
        res.status(200).json(updatedAchievement);
    } catch (error) {
        res.status(500).json({ message: "Failed to update achievement", error: error.message });
    }
};

// 📌 Delete an achievement
export const deleteAchievement = async (req, res) => {
    try {
        const achievement = await Achievement.findById(req.params.id);
        if (!achievement) return res.status(404).json({ message: "Achievement not found" });

        await achievement.deleteOne();
        res.status(200).json({ message: "Achievement deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete achievement", error: error.message });
    }
};
