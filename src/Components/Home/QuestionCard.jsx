import React from "react";
import { FaArrowUp, FaCommentDots } from "react-icons/fa";

const categoryColors = {
  "Computer Science": "bg-green-600",
  Math: "bg-green-500",
  Business: "bg-green-700",
  English: "bg-green-800",
  Science: "bg-green-400",
  History: "bg-green-300",
};

export default function QuestionCard({ data }) {
  const { question, category, answers, upvotes, anonymous, time } = data;
  const badgeColor = categoryColors[category] || "bg-gray-400";

  return (
    <div className="max-w-2xl w-full mx-auto bg-white relative rounded-xl shadow-lg p-6 flex flex-col gap-4 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 opacity-20 rounded-bl-full pointer-events-none"></div>
 
      <h2 className="text-lg font-semibold text-gray-800">{question}</h2>

     
      <div className="flex gap-2 flex-wrap">
        <span className={`text-xs text-white px-2 py-1 rounded-full ${badgeColor}`}>
          {category}
        </span>
        {anonymous && (
          <span className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded-full">
            Anonymous
          </span>
        )}
        <span className="text-xs text-gray-400">{time}</span>
      </div>

      
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-3 text-sm items-center">
          <span className="flex items-center gap-1 text-blue-600 font-semibold">
            <FaCommentDots />
            {answers} answers
          </span>
          <span className="flex items-center gap-1 text-green-600 font-semibold">
            <FaArrowUp />
            {upvotes} upvotes
          </span>
        </div>
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition">
          View Answers ✨
        </button>
      </div>
    </div>
  );
}
