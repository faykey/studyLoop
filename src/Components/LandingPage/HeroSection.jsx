import React from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="min-h-[40vh] md:min-h-[65vh] mt-20 mb-10 flex items-center justify-center bg-white text-center relative overflow-hidden px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="absolute bottom-[300px] md:top-[100px] md:left-[80px] left-[10px] w-12 h-12 bg-yellow-300 rounded-full opacity-70"></div>
        <div className="absolute top-[100px] md:top-[100px] md:right-40 right-9 w-10 h-10 bg-blue-200 rounded-full opacity-50"></div>
        <div className="absolute top-[120px] lg:top-[180px] lg:right-[65%] right-[75%] w-6 h-6 bg-green-200 rounded-full opacity-90 md:hidden lg:block"></div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Ask Anything.{" "}
          <span
            role="img"
            aria-label="books"
            className="inline-block -mt-2 relative top-[-10px]"
          >
            📚
          </span>
          <br />
          Study Together.{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mt-2">
          Stay on Track.
        </h2>

        <p className="text-gray-600 mt-6">
          A safe, anonymous space where students ask questions, get real
          answers, and stay consistent with study streaks and accountability
          partners.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <button className="bg-[hsla(142,71%,45%,1)] text-white w-[262px] h-[44px] px-8 rounded-[16px] font-semibold shadow-[0_4px_6px_hsla(88,100%,33%,1)] text-xl flex items-center justify-center gap-2">
            Get Early Access
            <FiArrowRight className="text-white text-lg mt-[2px]" />
          </button>

          <button className="bg-[hsla(217,91%,60%,1)] text-white w-[268px] h-[44px] px-8 rounded-[16px] font-semibold shadow-[0_4px_6px_hsla(199,80%,47%,1)] mb-3  text-lg flex items-center justify-center gap-2">
            <FiPlay className="text-white text-lg" />
            See How It Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
