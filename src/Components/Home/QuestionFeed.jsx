import React from "react";
import QuestionCard from "./QuestionCard";

const filters = [
  "All",
  "Math",
  "Science",
  "History",
  "English",
  "Computer Science",
  "Business",
];

const questions = [
  {
    id: 1,
    question: "How do I prepare for technical interviews?",
    category: "Computer Science",
    answers: 12,
    upvotes: 45,
    time: "2h ago",
    anonymous: true,
  },
  {
    id: 2,
    question: "What's the best way to memorize calculus formulas?",
    category: "Math",
    answers: 8,
    upvotes: 23,
    time: "4h ago",
    anonymous: false,
  },
  {
    id: 3,
    question: "Career advice for switching from engineering to finance?",
    category: "Business",
    answers: 15,
    upvotes: 67,
    time: "6h ago",
    anonymous: true,
  },
  {
    id: 4,
    question: "How to write compelling essays for college applications?",
    category: "English",
    answers: 20,
    upvotes: 89,
    time: "8h ago",
    anonymous: false,
  },
  {
    id: 5,
    question: "Understanding quantum physics concepts for beginners",
    category: "Science",
    answers: 32,
    upvotes: 156,
    time: "1d ago",
    anonymous: true,
  },
];

export default function QuestionFeed() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsla(226,100%,97%,1)] to-white px-4 md:px-10 py-8">
      <h1 className="mt-20 text-center text-3xl font-bold text-green-800">
        Question Feed
      </h1>
      <p className="text-center text-gray-500 mt-3">
        Discover amazing questions from students worldwide! 🌍
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {filters.map((item) => (
          <button
            key={item}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              item === "All"
                ? "bg-[hsla(142,71%,45%,1)] text-white"
                : "bg-white border border-[hsla(220,13%,91%,1)] text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {questions.map((q) => (
          <QuestionCard key={q.id} data={q} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-green-700 text-white px-6 py-3 rounded-full shadow-md font-semibold text-sm hover:scale-105 transition-transform">
          Load More Questions 🚀
        </button>
      </div>
    </div>
  );
}
