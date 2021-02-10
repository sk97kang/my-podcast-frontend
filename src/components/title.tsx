import React from "react";

interface ITitleProps {
  text: string;
  className?: string;
}

export const Title: React.FC<ITitleProps> = ({ text, className }) => {
  return <h2 className={`text-2xl font-medium ${className}`}>{text}</h2>;
};
