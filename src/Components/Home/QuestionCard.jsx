import React from "react";
import { FaArrowUp, FaCommentDots } from "react-icons/fa";

const categoryColors = {
  "Computer Science": "bg-gradient-to-r from-green-500 to-green-700",
  Math: "bg-gradient-to-r from-green-500 to-green-700",
  Business: "bg-gradient-to-r from-lime-500 to-green-700",
  English: "bg-gradient-to-r from-green-500 to-green-700",
  Science: "bg-gradient-to-r from-green-500 to-green-700",
  History: "bg-gradient-to-r from-green-500 to-green-700",
};

export default function QuestionCard({ data }) {
  const { question, category, answers, upvotes, anonymous, time } = data;
  const badgeColor = categoryColors[category] || "bg-gray-400";

  return (
    <div className="max-w-2xl w-full mx-auto bg-white relative rounded-xl shadow-xl p-6 flex flex-col gap-4   overflow-hidden transition-all duration-300 hover:shadow-2xl">
      
      <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-br from-[hsla(53,98%,77%,1)] to-[hsla(32,98%,83%,1)] opacity-20 rounded-bl-full pointer-events-none"></div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-800">{question}</h2>

      <div className="flex gap-2 flex-wrap items-center">
        <span className={`text-xs text-white px-3 py-1 rounded-full font-medium ${badgeColor}`}>
          {category}
        </span>

        <span className="text-xs text-gray-400 px-2">{time}</span>

        {anonymous && (
          <span className="text-xs text-white px-3 py-1 rounded-full font-medium bg-gradient-to-r from-purple-400 to-purple-600">
            Anonymous
          </span>
        )}
      </div>

      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-4 text-sm items-center">
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
