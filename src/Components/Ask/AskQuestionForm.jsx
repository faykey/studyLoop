import React, { useState } from "react";
import { FaBookOpen, FaPaperPlane } from "react-icons/fa";
import { LuLightbulb } from "react-icons/lu";
import { PiPaperPlaneTiltDuotone } from "react-icons/pi";  

const AskQuestionForm = () => {
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [details, setDetails] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ subject, question, details, anonymous });
  };

  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-r from-[#f3f7fd] to-[#fefeff] flex flex-col items-center justify-center px-4 pt-10">
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#f4e4d5] rounded-full opacity-90 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#e2d4f6] rounded-full opacity-90 -z-10"></div>
      <div className="absolute top-20 right-20 w-14 h-14 bg-[#d7f2ec] rounded-full opacity-60 -z-10"></div>

      <div className="relative mb-4 mt-10 z-10">
        <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-xl shadow-md">
          <LuLightbulb />
        </div>
        <div className="absolute -top-1 -right-1 bg-yellow-400 text-[10px] text-black font-bold px-[4px] py-[3px] rounded-full">
          ✨
        </div>
      </div>

      <h1 className="text-3xl font-bold bg-gradient-to-br from-[hsla(142,71%,45%,1)] to-[hsla(142,71%,22%,1)] bg-clip-text text-transparent">
        Ask Your Question!
      </h1>
      <p className="text-gray-600 text-center mb-6 z-10">
        Get help from amazing students and experts worldwide! ✨
      </p>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md z-10">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-medium text-sm text-gray-700 flex items-center gap-1 mb-3">
              <FaBookOpen className="text-purple-600" /> What subject is this
              about? <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-[hsla(270,100%,98%,1)] text-md border border-[hsla(220,13%,91%,1)] rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            >
              <option value="">Choose your subject… 📚</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="English">English</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div>
            <label className="font-medium text-sm text-gray-700 flex items-center gap-1 mb-3">
              ✨ What’s your question? <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Ask anything you want to know!🤔"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full bg-[hsla(270,100%,98%,1)] text-sm border border-[hsla(220,13%,91%,1)] rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="font-medium text-sm text-gray-700 flex items-center gap-1 mb-3">
              <PiPaperPlaneTiltDuotone className="text-blue-500" /> More details
              (Optional)
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Share more context to get better answers! 💡"
              className="w-full bg-[hsla(270,100%,98%,1)] text-sm border border-[hsla(220,13%,91%,1)] rounded-md px-4 py-2 h-24 resize-none focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div className="border border-gray-200 bg-gray-50 rounded-lg p-3 flex items-start gap-3">
            <input
              type="checkbox"
              id="anonymous"
              checked={anonymous}
              onChange={() => setAnonymous(!anonymous)}
              className="w-5 h-5 text-[hsla(212,100%,50%,1)] accent-[hsla(212,100%,50%,1)] mt-1"
            />
            <label htmlFor="anonymous" className="text-gray-700 text-sm">
              <span className="block font-medium">Ask anonymously</span>
              <span className="text-xs text-gray-500">
                Your identity will be hidden from other users
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[hsla(142,71%,45%,1)] to-[hsla(142,71%,22%,1)] text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <FaPaperPlane /> Post My Question! 🚀
          </button>
        </form>
      </div>

      <div className="mt-4 mb-8 z-10">
        <p className="text-xs text-gray-500 bg-white rounded-full px-4 py-1 shadow-sm">
          By posting, you agree to our community guidelines 📜
        </p>
      </div>
    </div>
  );
};

export default AskQuestionForm;
