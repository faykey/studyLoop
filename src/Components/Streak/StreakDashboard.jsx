// Revamped StreakDashboard matching uploaded design
import React from 'react';
import { FaCalendarAlt, FaTrophy } from 'react-icons/fa';
import { GiFlame } from 'react-icons/gi';
import { BsLightningFill } from 'react-icons/bs';
import { MdEmojiEvents } from 'react-icons/md';

const achievements = [
  { title: 'Wildfire', days: 3, earned: true, color: 'from-[hsla(27,96%,61%,1)] to-[hsla(0,84%,60%,1)]', icon: '🔥' },
  { title: 'Scholar', days: 7, earned: true, color: 'from-[hsla(213,94%,68%,1)] to-[hsla(271,91%,65%,1)]', icon: '📘' },
  { title: 'Achiever', days: 14, earned: false, icon: '🥉' },
  { title: 'Legend', days: 30, earned: false, icon: '🏅' },
  { title: 'Master', days: 100, earned: false, icon: '🌟' },
];

const StreakDashboard = () => {
  return (
    <div className="bg-gradient-to-r from-[#f3f7fd] to-[#fefeff] min-h-screen flex flex-col items-center py-10 px-4 space-y-6">

      {/* Top Icon and Streak */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl shadow-md">
          <GiFlame />
        </div>
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black font-semibold px-2 py-[1px] rounded-full shadow">
          12
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">12 Day Streak!</h1>
        <p className="text-gray-500">Keep it up! You're on fire! 🔥</p>
      </div>

      {/* Stats Cards */}
      <div className="flex gap-4 w-full max-w-md">
        <div className="flex-1 bg-white border-2 border-[hsla(141,84%,93%,1)] shadow-md rounded-xl px-4 py-5 text-center">
          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center text-lg">
            <FaTrophy />
          </div>
          <div className="text-lg font-semibold">18</div>
          <div className="text-sm text-gray-500">Best Streak</div>
        </div>
        <div className="flex-1 bg-white border-2 border-[hsla(141,84%,93%,1)] shadow-md rounded-xl px-4 py-5 text-center">
          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 text-white flex items-center justify-center text-lg">
            <FaCalendarAlt />
          </div>
          <div className="text-lg font-semibold">45</div>
          <div className="text-sm text-gray-500">Total Days</div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="bg-white w-full max-w-md rounded-xl p-4 shadow-md border-2 border-[hsla(141,84%,93%,1)]">
        <div className="flex justify-between items-start mb-1 text-sm font-medium text-gray-700">
          <div>
            <p>Next Goal</p>
            <p className="text-xs text-gray-500 mb-2">Achiever Badge</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white flex items-center justify-center">
            <MdEmojiEvents />
          </div>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-1">
          <div className="bg-gradient-to-r from-[hsla(142,71%,45%,1)] to-[hsla(142,71%,22%,1)] rounded-full h-full w-[86%]"></div>
        </div>
        <div className="text-xs text-gray-500 flex justify-between">
          <span>2 days to go!</span>
          <span className="text-orange-500 font-medium">86%</span>
        </div>
      </div>

       
      <div className="bg-white w-full max-w-md rounded-xl p-4 shadow-md border-2 border-[hsla(141,84%,93%,1)]">
        <div className="text-sm font-medium text-gray-700 mb-3">This Week</div>
        <div className="grid grid-cols-7 text-sm text-center">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={day}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1 ${i < 5 ? 'bg-gradient-to-r from-[hsla(142,71%,45%,1)] to-[hsla(160,84%,39%,1)] text-white' : 'border border-gray-300 text-gray-600'}`}>
                {i < 5 ? '✓' : i + 20}
              </div>
              <div className="text-xs text-gray-600">{day}</div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-md border-2 border-[hsla(141,84%,93%,1)]">
        <div className="text-center text-sm font-bold text-gray-700 mb-4">👑 Achievements</div>
        <div className="space-y-3">
           
           {achievements.map((ach, index) => (
  <div
    key={index}
    className={`rounded-2xl px-4 py-3 flex justify-between items-center ${
      ach.earned
        ? `bg-gradient-to-r ${ach.color} text-white`
        : 'bg-gray-100 text-gray-500 border border-dashed border-gray-300'
    }`}
  >
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-[hsla(220,13%,91%,1)] flex items-center justify-center text-lg">
        {ach.icon}
      </div>
      <div>
        <div className="font-semibold text-sm">{ach.title}</div>
        <div className="text-xs">{ach.days} day streak</div>
      </div>
    </div>
    {ach.earned && (
      <div className="text-sm flex items-center gap-1">
        <BsLightningFill className="text-white" /> <span>Earned!</span>
      </div>
    )}
  </div>
))}

        </div>
      </div>
 
      <div className="shadow-[hsla(0,0%,0%,0.1)] bg-gradient-to-r from-[hsla(142,71%,45%,1)] to-[hsla(142,71%,22%,1)] text-white text-center px-6 py-8 rounded-xl shadow-md max-w-md w-full">
        <div className="text-lg font-bold">🎯 You’re Amazing!</div>
        <div className="text-sm mt-2">Tomorrow will be day 13</div>
      </div>
    </div>
  );
};

export default StreakDashboard;
