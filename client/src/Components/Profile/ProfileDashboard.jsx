import React, { useEffect, useState } from "react";
import {
  FaUserAlt,
  FaHeart,
  FaRegCommentDots,
  FaTrophy,
  FaCog,
} from "react-icons/fa";
import {
  getUserProfile,
  getUserQuestionCount,
  getUserAnswerCount,
} from "../../utils/api";

const ProfileDashboard = () => {
  const [user, setUser] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [emailNotify, setEmailNotify] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [answerCount, setAnswerCount] = useState(0);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserProfile();
        setUser(res.user || res); // support both response styles
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    const fetchCounts = async () => {
      try {
        const q = await getUserQuestionCount();
        const a = await getUserAnswerCount();
        setQuestionCount(q.count || 0);
        setAnswerCount(a.count || 0);
      } catch (err) {
        console.error("Error fetching question/answer count", err);
      }
    };

    fetchProfile();
    fetchCounts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-500">Loading profile...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  const joinDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    })
    : "Recently";

  return (
    <div className="relative min-h-screen bg-[#f7f9fc] flex flex-col items-center py-10 px-4 z-10">
      {/* Decorative dots */}
      <div className="absolute top-40 left-10 w-14 h-14 bg-[#f4e4d5] rounded-full opacity-80 z-0" />
      <div className="absolute bottom-12 right-10 w-14 h-14 bg-[#e2d4f6] rounded-full opacity-70 z-0" />
      <div className="absolute top-32 right-24 w-10 h-10 bg-[#d7f2ec] rounded-full opacity-60 z-0" />

      {/* Avatar & header */}
      <div className="relative mb-4 mt-16 z-10">
        <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-xl shadow-md">
          <FaUserAlt />
        </div>
        <div className="absolute -top-1 -right-1 bg-yellow-400 text-[10px] text-black font-bold px-[4px] py-[3px] rounded-full">
          ✨
        </div>
      </div>

      <h1 className="text-3xl font-bold bg-gradient-to-br from-[hsla(142,71%,45%,1)] to-[hsla(142,71%,22%,1)] bg-clip-text text-transparent">
        Your Amazing Profile!
      </h1>
      <p className="text-gray-500 mb-6 text-sm">
        Manage your account and celebrate your achievements! 🎉
      </p>

      {/* User Info Card */}
      <div className="bg-white border w-full max-w-md rounded-xl shadow-2xl px-6 py-5 mb-6 text-center">
        <div className="p-4 rounded-full inline-block mb-1">
          <FaUserAlt className="text-[hsla(142,71%,45%,1)] text-4xl" />
        </div>
        <h2 className="font-semibold text-lg text-gray-800">
          {user.fullName || "Anonymous User"} 🎓
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Member since {joinDate} ✨
        </p>
        <p className="text-sm text-gray-500 mt-1">{user.email}</p>
      </div>

      {/* Stats */}
      <div className="flex gap-4 w-full max-w-md mb-6">
        <StatCard
          icon={<FaRegCommentDots />}
          colorFrom="#60a5fa"
          colorTo="#7c3aed"
          label="Questions Asked"
          value={questionCount}
        />
        <StatCard
          icon={<FaHeart />}
          colorFrom="#ec4899"
          colorTo="#ef4444"
          label="Helpful Answers"
          value={answerCount}
        />
      </div>

      {/* Achievements */}
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md px-4 py-5 mb-6">
        <SectionHeader icon={<FaTrophy />} title="Your Achievements! 🏆" colorFrom="#facc15" colorTo="#f97316" />
        <div className="flex justify-between gap-2">
          <Achievement label="First Question" icon="🎯" colorFrom="#22c55e" colorTo="#14b8a6" />
          <Achievement label="Great Helper" icon="💬" colorFrom="#60a5fa" colorTo="#7c3aed" />
          <Achievement label="Community Star" icon="❤️" colorFrom="#ec4899" colorTo="#ef4444" />
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md px-4 py-5">
        <SectionHeader icon={<FaCog />} title="Settings & Preferences" colorFrom="#6366f1" colorTo="#7c3aed" />
        <div className="bg-gray-50 border rounded-lg px-4 py-4 space-y-4">
          <Checkbox
            label={<CheckboxLabel emoji="🙈" text="Anonymous by default" />}
            value={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          <Checkbox
            label={<CheckboxLabel emoji="📧" text="Email notifications" />}
            value={emailNotify}
            onChange={() => setEmailNotify(!emailNotify)}
          />
          <Checkbox
            label={<CheckboxLabel emoji="🌙" text="Dark mode" />}
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const StatCard = ({ icon, colorFrom, colorTo, label, value }) => (
  <div className="flex-1 bg-white border-2 border-[hsla(141,84%,93%,1)] shadow-2xl rounded-xl px-4 py-5 text-center">
    <div
      className={`bg-gradient-to-br from-[${colorFrom}] to-[${colorTo}] w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center text-white text-xl`}
    >
      {icon}
    </div>
    <div className="text-lg font-semibold">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

const SectionHeader = ({ icon, title, colorFrom, colorTo }) => (
  <div className="flex items-center gap-2 mb-4">
    <div
      className={`bg-gradient-to-tr from-[${colorFrom}] to-[${colorTo}] w-8 h-8 rounded-full flex items-center justify-center text-white text-lg`}
    >
      {icon}
    </div>
    <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
  </div>
);

const Achievement = ({ icon, label, colorFrom, colorTo }) => (
  <div
    className={`flex-1 py-6 rounded-lg text-center text-white text-sm font-medium bg-gradient-to-tr from-[${colorFrom}] to-[${colorTo}]`}
  >
    <div className="text-xs mb-1">{icon}</div>
    {label}
  </div>
);

const Checkbox = ({ label, value, onChange }) => (
  <label className="flex items-center justify-between gap-2 text-sm text-gray-600 cursor-pointer">
    <div className="flex items-center gap-2">{label}</div>
    <input type="checkbox" checked={value} onChange={onChange} className="accent-blue-500 w-4 h-4" />
  </label>
);

const CheckboxLabel = ({ emoji, text }) => (
  <span className="flex items-center gap-2">
    <span className="bg-[#e5f0ff] text-sm rounded-full w-6 h-6 flex items-center justify-center">{emoji}</span>
    {text}
  </span>
);

export default ProfileDashboard;
