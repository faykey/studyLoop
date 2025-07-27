import Notification from "../models/Notification.js";

// 📌 Create a new notification
export const createNotification = async (req, res) => {
    try {
        const { user, type, message } = req.body;

        const notification = await Notification.create({
            user,
            type,
            message,
        });

        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ message: "Failed to create notification", error: error.message });
    }
};

// 📌 Get all notifications for a user
export const getUserNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch notifications", error: error.message });
    }
};

// 📌 Mark a notification as read
export const markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (!notification) return res.status(404).json({ message: "Notification not found" });

        // Ensure the notification belongs to the logged-in user
        if (notification.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized" });
        }

        notification.isRead = true;
        await notification.save();

        res.status(200).json({ message: "Notification marked as read" });
    } catch (error) {
        res.status(500).json({ message: "Failed to mark notification as read", error: error.message });
    }
};

// 📌 Delete a notification
export const deleteNotification = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (!notification) return res.status(404).json({ message: "Notification not found" });

        // Ensure the notification belongs to the logged-in user
        if (notification.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized" });
        }

        await notification.deleteOne();
        res.status(200).json({ message: "Notification deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete notification", error: error.message });
    }
};
