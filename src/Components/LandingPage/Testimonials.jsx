import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-white py-16 px-4 text-center">
      
      <div className="inline-block bg-green-100 text-[hsla(142,76%,36%,1)] px-4 py-5 rounded-full mb-4 font-medium text-sm shadow-sm">
      ⭐⭐⭐⭐⭐ Loved by students
      </div>
 
      <h2 className="text-3xl sm:text-4xl font-bold text-[hsla(215,28%,17%,1)] mb-2">
        <span className="text-[hsla(142,71%,45%,1)]">1,200+</span> Questions Answered
      </h2>
      <p className="text-gray-600 mb-12">By students like you, for students like you.</p>
 
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch 
      sm:max-w-2xl max-w-md md:max-w-5xl mx-auto px-4">
  
  <div className="bg-[hsla(214,95%,93%,1)] font-semibold rounded-2xl p-6 flex-1 shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.06] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)]">
    <div className="text-2xl mb-2">🧪</div>
    <p className="text-gray-800 mb-4">
      "I finally asked my Physics question and got 3 great answers in minutes."
    </p>
    <p className="text-gray-700 font-semibold">@AnonymousBio</p>
  </div>

  
  <div className="bg-[hsla(34,100%,92%,1)] font-semibold rounded-2xl p-6 flex-1 shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.06] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(249,115,22,0.3)]">
    <div className="text-2xl mb-2">🔥</div>
    <p className="text-gray-800 mb-4">
      "My study partner keeps me motivated. We're both on a 12-day streak!"
    </p>
    <p className="text-gray-700 font-semibold">@MathNinja</p>
  </div>

  
  <div className="bg-[hsla(55,97%,88%,1)] font-semibold rounded-2xl p-6 flex-1 shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.06] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(234,179,8,0.3)]">
    <div className="text-2xl mb-2">💡</div>
    <p className="text-gray-800 mb-4">
      "No more fear of asking 'dumb' questions. Everyone here just wants to help."
    </p>
    <p className="text-gray-700 font-semibold">@QuietLearner</p>
  </div>
</div>

    </div>
  );
};

export default Testimonials;