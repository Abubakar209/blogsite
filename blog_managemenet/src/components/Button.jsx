import React from 'react';

const Button = ({ label, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:from-blue-500 hover:to-teal-400 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 active:scale-95 transition-all duration-300 ease-in-out ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
