import React from "react";

export const Episode = () => {
  return (
    <div className="mr-4 mb-2 w-44 cursor-pointer">
      <div
        className="w-full h-24 bg-center bg-cover rounded-md mb-2 relative"
        style={{
          backgroundImage: `url(http://img.podbbang.com/pbi/t/430/240/0/101/142/000142101/142101.jpg)`,
        }}
      ></div>
      <div className="w-full overflow-ellipsis overflow-hidden whitespace-nowrap">
        3150[부평 학원장 살인1] 기묘하게 이어지는 두 건의 사건
      </div>
      <div className="text-sm font-light text-gray-500 mt-1">
        프로파일러 배상훈의 CRIME
      </div>
    </div>
  );
};
