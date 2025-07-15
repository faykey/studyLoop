import React from 'react';

const SuccessFeatures = () => {
  return (
    <div className="relative bg-[#f9fbfc] py-16 px-4 md:px-12 text-center overflow-hidden">
      <div className="absolute top-20 left-80 w-6 h-6 bg-yellow-300 rounded-full z-0" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 z-10 relative">
        Everything You Need to <span className="text-[hsla(142,71%,45%,1)]">Succeed</span>
      </h2>
      <p className="text-gray-500 mt-2 text-sm md:text-base">
        Three powerful features that make studying easier and more effective.
      </p>

      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 relative z-10">

        {/* Anonymous Q&A Card */}
        <div className="relative w-fit">
          <div className="absolute -top-4 -left-4 w-10 h-10 bg-purple-200/60 rounded-full z-0" />
          <div className="bg-purple-100 p-6 rounded-xl w-[280px] h-[200px] transform -rotate-2 shadow-md outline outline-1 outline-gray-300 relative z-10">
            <div className="text-3xl mb-2">🎭</div>
            <h3 className="font-bold text-lg mb-1">Anonymous Q&A</h3>
            <p className="text-sm text-gray-600">Get real help without revealing who you are.</p>
          </div>
        </div>

        {/* Study Streaks Card */}
        <div className="relative w-fit">
           
          <div className="bg-orange-100 p-6 rounded-xl w-[280px] h-[200px] transform rotate-1 shadow-md outline outline-1 outline-gray-300 relative z-10">
            <div className="text-3xl mb-2">🔥</div>
            <h3 className="font-bold text-lg mb-1">Study Streaks</h3>
            <p className="text-sm text-gray-600">Stay accountable with daily XP and badges.</p>
          </div>
        </div>

        {/* Streak Partners Card */}
        <div className="relative w-fit">
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-pink-300/50 rounded-full z-0" />
          <div className="bg-green-100 p-6 rounded-xl w-[280px] h-[200px] transform -rotate-1 shadow-md outline outline-1 outline-gray-300 relative z-10">
            <div className="text-3xl mb-2">🧑‍🤝‍🧑</div>
            <h3 className="font-bold text-lg mb-1">Streak Partners</h3>
            <p className="text-sm text-gray-600">Match with students learning what you're learning.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SuccessFeatures;
