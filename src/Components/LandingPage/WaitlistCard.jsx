import React from 'react';

const WaitlistCard = () => {
  return (
    <div className="min-h-[60] flex items-center justify-center bg-[#f4fff3] relative overflow-hidden px-4">
       
      <div className="relative z-10 rotate-[2deg]">
         
        <div className="absolute -left-10 top-1/8 -translate-y-1/2 w-20 h-20 bg-yellow-300 rounded-full z-10"></div>
        <div className="absolute -right-10 top-46 -translate-y-1/8 w-20 h-20 bg-pink-300 rounded-full z-10"></div>

         
        <div className="relative z-10 bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl shadow-md w-full max-w-lg border border-green-200">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Ready to Transform Your{' '}
            <span className="text-green-600 font-bold">Study<br />Game?</span>
          </h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Get early access when we launch. Be among the first students to experience anonymous learning and streak accountability.
          </p>

         
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition duration-200"
            >
              Join Waitlist →
            </button>
          </form>

           
          <p className="text-xs text-center text-gray-500 mt-4">
            🔒 No spam. Just learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistCard;