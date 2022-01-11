import React, { useEffect } from "react";
import axios from "axios";
import UpdateRankingCard from "../atoms/UpdateRankingCard";

export default function UpdateRankingList(props: any) {
  const { uniquetracks } = props;

  if (uniquetracks === null) {
    return <div></div>;
  }

  const userId = 1;
  const trackId = uniquetracks.trackId;
  const trackName = uniquetracks.trackName;

  // uniquetracksは配列にし、順々に追加したい
  // 1. DBを更新する(ここではユニークなキーとしてIDを渡すこと)
  useEffect(() => {
    axios(`http://localhost:8000/${userId}/ranking/${trackId}/${trackName}`, {
      method: "POST",
    })
      .then((FeatureResponse) => {
        console.log(FeatureResponse);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, [trackId]);

  useEffect(() => {
    axios(`http://localhost:8000/${userId}/ranking`, {
      method: "GET",
    })
      // 楽曲情報のリストを取得する
      .then((FeatureResponse) => {
        const featureResponse = FeatureResponse.data.map(
          (index: number) => index
        );
        console.log(featureResponse);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, [trackId]);

  return (
    <>
      <div className="text-center space-x-4 text-xl space-y-12"></div>
      <div className="bg-cover bg-gray-50">
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          Your Favorite Songs
          <UpdateRankingCard
            trackId={uniquetracks.trackId}
            trackName={uniquetracks.trackName}
            audio={uniquetracks.audio}
            coverArt={uniquetracks.coverArt}
            key={uniquetracks.trackId}
          />
        </div>
      </div>
    </>
  );
}
