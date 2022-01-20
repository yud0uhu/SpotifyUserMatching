import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateRankingCard from "../atoms/UpdateRankingCard";

// interface props {
//   userId: number;
//   uniquetracks: any;
// }
export default function UpdateRankingList(props: any) {
  const { userId, uniquetracks } = props;

  const [tracks, setTracks] = useState([]);

  console.log(userId);

  if (uniquetracks === null) {
    return <div></div>;
  }

  const trackId = uniquetracks.trackId;
  const trackName = uniquetracks.trackName;

  // uniquetracksは配列にし、順々に追加したい
  // 1. DBを更新する(ここではユニークなキーとしてIDを渡すこと)
  useEffect(() => {
    axios(
      `http://http://ec2-54-82-215-43.compute-1.amazonaws.com/${userId}/ranking/${trackId}/${trackName}`,
      {
        method: "POST",
      }
    )
      .then((FeatureResponse) => {
        console.log(FeatureResponse);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, [trackId]);

  useEffect(() => {
    axios(
      `http://http://ec2-54-82-215-43.compute-1.amazonaws.com/${userId}/ranking`,
      {
        method: "GET",
      }
    )
      // 楽曲情報のリストを取得する
      .then((TrackInfoResponse) => {
        console.log(TrackInfoResponse.data);
        const trackInfoResponse = TrackInfoResponse.data.map(
          (index: number) => index
        );
        console.log("select_feature_track_response:" + trackInfoResponse);
        setTracks(trackInfoResponse);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, [trackId]);
  console.log(tracks);

  return (
    <>
      <div className="text-center space-x-4 text-xl space-y-12"></div>
      <div className="bg-cover bg-gray-50">
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          Your Favorite Songs
          {tracks.map((track: any) => (
            <UpdateRankingCard
              trackId={track.track_id}
              trackName={track.track_name}
              audio={track.spotify_url}
              coverArt={track.cover_art}
              key={track.track_id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
