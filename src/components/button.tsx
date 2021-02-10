import React from "react";

interface IButtonProps {
  text: string;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      className={`px-3 py-3 transition-colors focus:outline-none ${
        disabled
          ? "bg-gray-300 pointer-events-none"
          : "bg-lime-500 hover:bg-lime-600"
      }`}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};
