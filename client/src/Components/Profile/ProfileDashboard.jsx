import { useState } from "react";
import {
  FaUserAlt,
  FaHeart,
  FaRegCommentDots,
  FaTrophy,
  FaCog,
} from "react-icons/fa";

const ProfileDashboard = () => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [emailNotify, setEmailNotify] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f7f9fc] flex flex-col items-center py-10 px-4 z-10">
      <div className="absolute top-40 left-10 w-14 h-14 bg-[#f4e4d5] rounded-full opacity-80   z-0" />
      <div className="absolute bottom-12 right-10 w-14 h-14 bg-[#e2d4f6] rounded-full opacity-70 z-0" />
      <div className="absolute top-32 right-24 w-10 h-10 bg-[#d7f2ec] rounded-full opacity-60  z-0" />
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

      <div className="bg-[hsla(0,0%,100%,1)] border-[hsla(220,14%,96%,1)] w-full max-w-md rounded-xl shadow-2xl px-6 py-5 mb-6 text-center">
        <div className="p-4 rounded-full inline-block mb-1">
          <FaUserAlt className="text-[hsla(142,71%,45%,1)] text-4xl" />
        </div>
        <h2 className="font-semibold text-lg text-gray-800">
          Anonymous Learner 🎓
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Member since December 2024 ✨
        </p>
      </div>

      <div className="flex gap-4 w-full max-w-md mb-6">
        <div className="flex-1 bg-white border-2 border-[hsla(141,84%,93%,1)] shadow-2xl rounded-xl px-4 py-5 text-center">
          <div className="bg-gradient-to-br from-[hsla(213,94%,68%,1)] to-[hsla(271,91%,65%,1)] w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center text-white text-xl">
            <FaRegCommentDots />
          </div>
          <div className="text-lg font-semibold">12</div>
          <div className="text-sm text-gray-500">Questions Asked</div>
        </div>
        <div className="flex-1 bg-white border-2 border-[hsla(141,84%,93%,1)] shadow-2xl rounded-xl px-4 py-5 text-center">
          <div className="bg-gradient-to-br from-[hsla(329,86%,70%,1)] to-[hsla(0,84%,60%,1)] w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center text-white text-xl">
            <FaHeart />
          </div>
          <div className="text-lg font-semibold">48</div>
          <div className="text-sm text-gray-500">Helpful Answers</div>
        </div>
      </div>

      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md px-4 py-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-gradient-to-br from-[hsla(45,93%,47%,1)] to-[hsla(25,95%,53%,1)] w-8 h-8 rounded-full flex items-center justify-center text-white text-lg">
            <FaTrophy />
          </div>
          <h3 className="text-sm font-semibold text-gray-700">
            Your Achievements! 🏆
          </h3>
        </div>

        <div className="flex justify-between gap-2">
          <div className="flex-1 py-6 rounded-lg text-center text-white text-sm font-medium bg-gradient-to-tr from-[hsla(142,69%,58%,1)] to-[hsla(173,80%,40%,1)]">
            <div className="text-xs mb-1">🎯</div>
            First Question
          </div>
          <div className="flex-1 py-6 rounded-lg text-center text-white text-sm font-medium bg-gradient-to-tr from-[hsla(213,94%,68%,1)] to-[hsla(271,91%,65%,1)]">
            <div className="text-xs mb-1">💬</div>
            Great Helper
          </div>
          <div className="flex-1 py-6 rounded-lg text-center text-white text-sm font-medium bg-gradient-to-tr from-[hsla(329,86%,70%,1)] to-[hsla(0,84%,60%,1)]">
            <div className="text-xs mb-1">❤️</div>
            Community Star
          </div>
        </div>
      </div>

      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-gradient-to-tr from-[hsla(239,84%,67%,1)] to-[hsla(271,91%,65%,1)] w-8 h-8 rounded-full flex items-center justify-center text-white">
            <FaCog className="text-sm" />
          </div>
          <h3 className="text-sm font-semibold text-gray-700">
            Settings & Preferences
          </h3>
        </div>

        <div className="bg-[hsla(210,40%,98%,1)] border-2 border-[hsla(220,13%,91%,1)] rounded-lg px-4 py-4 space-y-4">
          <Checkbox
            label={
              <span className="flex items-center gap-2">
                <span className="bg-[#e5f0ff] text-sm rounded-full w-6 h-6 flex items-center justify-center">
                  🙈
                </span>
                Anonymous by default
              </span>
            }
            value={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          <Checkbox
            label={
              <span className="flex items-center gap-2">
                <span className="bg-[#e5f0ff] text-sm rounded-full w-6 h-6 flex items-center justify-center">
                  📧
                </span>
                Email notifications
              </span>
            }
            value={emailNotify}
            onChange={() => setEmailNotify(!emailNotify)}
          />
          <Checkbox
            label={
              <span className="flex items-center gap-2">
                <span className="bg-[#e5f0ff] text-sm rounded-full w-6 h-6 flex items-center justify-center">
                  🌙
                </span>
                Dark mode
              </span>
            }
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>
    </div>
  );
};

const Checkbox = ({ label, value, onChange }) => (
  <label className="flex items-center justify-between gap-2 text-sm text-gray-600 cursor-pointer">
    <div className="flex items-center gap-2">{label}</div>
    <input
      type="checkbox"
      checked={value}
      onChange={onChange}
      className="accent-blue-500 w-4 h-4"
    />
  </label>
);

export default ProfileDashboard;
