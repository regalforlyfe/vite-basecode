import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};

export default Button;
