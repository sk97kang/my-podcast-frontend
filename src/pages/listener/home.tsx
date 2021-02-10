import React from "react";
import { Episode } from "../../components/episode";
import { Layout } from "../../components/layout";
import { Podcast } from "../../components/podcast";
import { Title } from "../../components/title";

export const HomePage = () => {
  return (
    <Layout title="Podcasts" className="pt-4">
      <Title
        text="Welcom to My Podcast!"
        className="mb-8 bg-gray-100 py-5 text-center"
      />
      <div>
        <div className="flex justify-between items-center text-lg font-medium mb-5">
          <div>카테고리별 팟캐스트</div>
          <div>전체 보기 &rarr;</div>
        </div>
        <div className="flex overflow-y-auto mb-8">
          {Array(4)
            .fill(0)
            .map(() => (
              <div className="mr-4 mb-2 cursor-pointer">
                <div
                  className="w-20 h-20 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(https://dimg.podbbang.com/categories/1029.png)`,
                  }}
                ></div>
                <div className="text-sm font-medium mt-1 text-center">교양</div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center text-lg font-medium mb-5">
          <div>회원님을 위한 에피소드</div>
          <div>전체 보기 &rarr;</div>
        </div>
        <div className="flex overflow-y-auto mb-8">
          {Array(4)
            .fill(0)
            .map(() => (
              <Episode />
            ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center text-lg font-medium mb-5">
          <div>회원님을 위한 팟캐스트</div>
          <div>전체 보기 &rarr;</div>
        </div>
        <div className="flex overflow-y-auto">
          {Array(6)
            .fill(0)
            .map(() => (
              <Podcast />
            ))}
        </div>
      </div>
    </Layout>
  );
};
