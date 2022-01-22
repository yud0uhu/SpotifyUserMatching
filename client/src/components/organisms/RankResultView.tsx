import { useLocation } from "react-router-dom";
import { faCrown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RankReSetButton from "../atoms/RankReSetButton";
import UpdateRankingList from "../molecules/UpdateRankingList";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  userId: number;
};
export default function RankResultView(porps: Props) {
  const { userId } = porps;
  const [tracks, setTracks] = useState({});

  // const location = useLocation();

  // console.log(location.state);

  useEffect(() => {
    axios(
      `http://ec2-54-82-215-43.compute-1.amazonaws.com:8001/${userId}/ranking`,
      {
        method: "GET",
      }
    )
      // 楽曲情報のリストを取得する
      .then((TrackInfoResponse) => {
        console.log(TrackInfoResponse.data);
        const trackInfoResponse = TrackInfoResponse.data.map((index: number) =>
          setTracks(trackInfoResponse[index])
        );
        console.log("select_feature_track_response:" + trackInfoResponse);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, [userId]);
  console.log(tracks);

  function UpdateRankingListRender() {
    return <UpdateRankingList userId={userId} />;
  }

  return (
    <div>
      <div className="m-4 text-xl text-gray-800 text-center">
        <FontAwesomeIcon icon={faCrown} />
        オールタイムミュージックランキング
      </div>
      <div className="flex justify-center">{<RankReSetButton />}</div>
      {<UpdateRankingListRender />}
    </div>
  );
}
