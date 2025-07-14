import React from "react";

const SuccessModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <div className="text-3xl mb-2">✅</div>
        <p className="text-lg font-semibold text-green-600">Account created successfully!</p>
      </div>
    </div>
  );
};

export default SuccessModal;