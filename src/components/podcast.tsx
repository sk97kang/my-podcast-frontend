import React from "react";

export const Podcast = () => {
  return (
    <div className="mr-4 mb-2 cursor-pointer">
      <div
        className="w-36 h-36 bg-center bg-cover rounded-md mb-2"
        style={{
          backgroundImage: `url(http://img.podbbang.com/img/pb_m/thumb/x150/1778575.png)`,
        }}
      ></div>
      <div>홍익인간</div>
    </div>
  );
};
