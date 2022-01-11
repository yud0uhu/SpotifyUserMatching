import React, { useState, useEffect } from "react";

import { useMutation } from "@apollo/client";
import { CREATE_TRACKS } from "../../graphql/query";
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

  useEffect(() => {
    // 2. マッチユーザーのリストを更新する（バックエンド側）
    axios(`http://localhost:8000/user/${userId}`, {
      method: "GET",
    })
      // 楽曲情報のリストを取得する
      .then((UserResponse) => {
        console.log(UserResponse);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, [userId]);

  // const [createTracks, { data, loading, error }] = useMutation(CREATE_TRACKS);
  // if (loading) return <div>"Submitting..."</div>;
  // // if (error) return <div>`Submission error! ${error.message}`</div>;

  // // APIにデータを返す
  // createTracks({
  //   variables: {
  //     userId: userId,
  //     trackId: trackId,
  //   },
  // });

  // console.log(data);

  // const updateRankingCardList = uniquetracks.map((uniquetrack: any) => (
  //   <UpdateRankingCard
  //     trackId={uniquetrack.trackId}
  //     trackName={uniquetrack.trackName}
  //     audio={uniquetrack.audio}
  //     coverArt={uniquetrack.coverArt}
  //     key={uniquetrack.trackId}
  //   />
  // ));

  return (
    <>
      <div className="text-center space-x-4 text-xl space-y-12"></div>
      <div className="bg-cover bg-gray-50">
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          Your Favorite Songs
          {/* {updateRankingCardList} */}
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
