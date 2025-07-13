import React from "react";

const StudyCard = () => {
  return (
    <div className="bg-white flex items-center justify-center p-4">
      <div
        className="relative bg-white border-[2px] outline outline-[2.5px] outline-gray-100 border-gray-50 rounded-[24px] w-[1024px] p-[44px_52px_48px_52px]"
        style={{
          boxShadow: "0px 0px 0px 4px transparent",
        }}
      >
        <div className="bg-[#eaf3fe] border-[2px] outline outline-[3.5px] outline-blue-200 border-blue-100 rounded-lg px-4 py-3 flex items-start space-x-3 shadow-sm">
          <div className="text-2xl">🤔</div>
          <div>
            <p className="font-semibold text-gray-800">
              How do I approach calculus integration?
            </p>
            <p className="text-sm text-gray-500">
              Posted anonymously • 3 helpful answers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="bg-orange-100 border-[2px] outline outline-[3.5px] outline-orange-200 border-orange-100 rounded-lg p-4 text-center shadow-md transform -rotate-1">
            <div className="text-2xl mb-1">🔥</div>
            <p className="font-semibold text-lg text-gray-800">5 Day Streak</p>
            <p className="text-sm text-orange-600 font-medium">Keep it up!</p>
          </div>

          <div className="bg-green-100 border-[2px] outline outline-[3.5px] outline-green-200 border-green-100 rounded-lg p-4 text-center shadow-md transform rotate-1">
            <div className="text-2xl mb-1">👥</div>
            <p className="font-semibold text-lg text-gray-800">Study Partner</p>
            <p className="text-sm text-green-600 font-medium">
              Alex is online!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
