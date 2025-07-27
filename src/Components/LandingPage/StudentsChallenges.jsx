import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  

const StudentsChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const challenges = [
    {
      emoji: '😰',
      text: '"I\'m afraid to ask questions in class."',
      sub: "Sound familiar? You're not alone.",
      bg: 'bg-red-200/60',
      border: 'border-red-200',
      outline: 'outline-red-300',
      tilt: '-rotate-2',
    },
    {
      emoji: '😌',
      text: 'Ask anonymously with no judgment.',
      sub: 'Simple, effective, and designed for you.',
      bg: 'bg-green-100',
      border: 'border-green-200',
      outline: 'outline-green-300',
      tilt: 'rotate-1',
    },
    {
      emoji: '😔',
      text: '"Studying alone is hard."',
      sub: "Sound familiar? You're not alone.",
      bg: 'bg-red-200/40',
      border: 'border-yellow-200',
      outline: 'outline-red-300',
      tilt: 'rotate-1',
    },
    {
      emoji: '🤝',
      text: 'Match with a partner based on your goals.',
      sub: 'Simple, effective, and designed for you.',
      bg: 'bg-blue-100',
      border: 'border-blue-200',
      outline: 'outline-blue-300',
      tilt: '-rotate-2',
    },
    {
      emoji: '😩',
      text: '"I can\'t stay consistent."',
      sub: "Sound familiar? You're not alone.",
      bg: 'bg-purple-100',
      border: 'border-purple-200',
      outline: 'outline-purple-300',
      tilt: '-rotate-1',
    },
    {
      emoji: '🏆',
      text: 'Build streaks and earn progress badges.',
      sub: 'Simple, effective, and designed for you.',
      bg: 'bg-yellow-100',
      border: 'border-yellow-200',
      outline: 'outline-yellow-300',
      tilt: 'rotate-1',
    },
  ];

  return (
    <div className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2 text-[hsla(215,28%,17%,1)]">
        We Get It. <span className="text-[hsla(142,71%,45%,1)]">We've Got You.</span>
      </h2>
      <p className="text-[hsla(215,14%,34%,1)] mb-10">
        Every student faces these challenges. Here's how we help.
      </p>

      <div className="max-w-sm md:max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {challenges.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`p-5 rounded-xl border shadow-md transform ${item.tilt} transition-all duration-300 hover:animate-breathe ${item.bg} ${item.border} outline outline-1 ${item.outline}`}
          >
            <div className="text-lg font-medium text-gray-700 flex items-start gap-2">
              <span className="text-2xl">{item.emoji}</span>
              <span>{item.text}</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsChallenges;
