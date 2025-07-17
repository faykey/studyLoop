import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    emoji: "♀",
    bg: "bg-purple-100 border-purple-300",
    rotate: "-rotate-3",
    title: "Ask a question anonymously",
    desc: "No judgment, just genuine help from fellow students.",
  },
  {
    number: "02",
    emoji: "🤝",
    bg: "bg-blue-100 border-blue-300",
    rotate: "rotate-3",
    title: "Get matched with a study partner",
    desc: "Find someone with similar goals and learning style.",
  },
  {
    number: "03",
    emoji: "🔥",
    bg: "bg-orange-100 border-orange-300",
    rotate: "-rotate-3",
    title: "Keep your daily streak alive",
    desc: "Build consistency with daily learning goals.",
  },
  {
    number: "04",
    emoji: "🏆",
    bg: "bg-green-100 border-green-300",
    rotate: "rotate-3",
    title: "Earn rewards and badges",
    desc: "Celebrate your progress and achievements.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-20 px-4">
      <div className="max-w-[1120px] mx-auto text-center lg:flex lg:flex-col lg:items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How It <span className="text-green-600">Works</span>
        </h2>
        <p className="text-gray-600 mb-16 text-base sm:text-lg">
          Four simple steps to transform your study experience.
        </p>

        <div className="space-y-[60px]">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center justify-center  gap-[50px]`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className={`max-w-md text-left space-y-2 relative ${
                  idx === 0 || idx === 2
                    ? "md:-left-[80px] left-[10px] lg:right-[200px]"
                    : "md:left-[80px] left-[10px] lg:left-[200px]"
                } transition-all duration-300`}
              >
                <p className="text-gray-400 text-2xl font-semibold">
                  {step.number} <span>{step.emoji}</span>
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className={`relative w-[150px] h-[120px] flex items-center justify-center text-4xl rounded-2xl border shadow-md ${
                  step.bg
                } ${step.rotate} ${
                  idx === 0 || idx === 2
                    ? "md:left-[80px] left-[10px] lg:left-[150px]"
                    : ""
                }`}
              >
                {step.emoji}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
