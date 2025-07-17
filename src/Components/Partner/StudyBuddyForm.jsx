import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineStar, MdOutlineWorkOutline } from "react-icons/md";

const StudyBuddyForm = () => {
  return (
    <div className="relative bg-gradient-to-br from-[hsla(210,40%,98%,1)] to-[hsla(214,100%,97%,1)] min-h-screen flex flex-col items-center justify-center px-4 py-10 overflow-visible">
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#f4e4d5] rounded-full opacity-80   z-0" />
      <div className="absolute bottom-12 right-10 w-24 h-24 bg-[#e2d4f6] rounded-full opacity-70 z-0" />
      <div className="absolute top-32 right-24 w-20 h-20 bg-[#d7f2ec] rounded-full opacity-60  z-0" />

      <div className="relative mb-4 mt-10 z-10">
        <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-xl shadow-md">
          <FaUserFriends />
        </div>
        <div className="absolute -top-1 -right-1 bg-yellow-400 text-[10px] text-black font-bold px-[4px] py-[3px] rounded-full">
          ✨
        </div>
      </div>

      <div className="text-center z-10 mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-br from-[hsla(142,71%,45%,1)] to-[hsla(142,71%,22%,1)] bg-clip-text text-transparent">
          Find Your Study <br /> Buddy!
        </h1>
        <p className="text-gray-600 mt-1">
          Tell us your preferences to find the perfect match! 🎯
        </p>
      </div>

      <div className="relative bg-white border border-[hsla(220,14%,96%,1)] w-full max-w-md rounded-2xl shadow-2xl px-6 py-12 z-10">
        <div className="absolute top-0 right-0 w-10 h-10 bg-purple-100 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-10 h-10 bg-blue-100 rounded-tr-full" />

        <div className="mb-6">
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-2 gap-2">
            <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">
              <MdOutlineStar />
            </span>
            What subject interests you most?
          </label>
          <select className="w-full border border-gray-200 bg-[hsla(210,20%,98%,1)] rounded-xl py-3 px-4 text-sm text-gray-600">
            <option>Choose your favorite subject…📚</option>
            <option>Math</option>
            <option>Science</option>
            <option>History</option>
            <option>English</option>
            <option>Computer Science</option>
            <option>Business</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-2 gap-2">
            <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">
              <MdOutlineWorkOutline />
            </span>
            What’s your dream career?
          </label>
          <select className="w-full border border-gray-200 bg-[hsla(210,20%,98%,1)] rounded-xl py-3 px-4 text-sm text-gray-600">
            <option>Select your dream career...🎯</option>
            <option>Doctor</option>
            <option>Engineer</option>
            <option>Teacher</option>
            <option>Artist</option>
            <option>Software Developer</option>
            <option>Entrepreneur</option>
          </select>
        </div>

        <button className="w-full bg-gradient-to-r from-[hsla(142,71%,45%,1)] to-[hsla(142,71%,22%,1)] text-white py-4 rounded-2xl shadow-md font-semibold flex justify-center items-center gap-2 text-sm hover:shadow-lg transition duration-200">
          <FaUserFriends />
          Find My Study Partners! 🚀
        </button>
      </div>
    </div>
  );
};

export default StudyBuddyForm;
