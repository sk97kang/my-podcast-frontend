import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-100 w-full h-14 fixed">
      <div className="container h-14 flex justify-between items-center">
        <Link to="/">
          <div>My Podcast</div>
        </Link>
        <div>
          <input type="search" />
        </div>
      </div>
    </header>
  );
};
