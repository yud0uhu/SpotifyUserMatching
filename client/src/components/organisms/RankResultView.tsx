import { useLocation } from "react-router-dom";
import { faCrown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import RankReSetButton from "../atoms/RankReSetButton";
import RankingList from "../molecules/RankingList";
import UpdateRankingList from "../molecules/UpdateRankingList";

export default function RankResultView(props: any) {
  // const { uniqueData, uniqueUpdateData } = props;
  // const [tracks, setTracks] = useState([]);
  // console.log(uniqueData);

  const location = useLocation();

  console.log(location.state);

  // useEffect(() => {
  //   console.log("useEffectが実行されました");
  //   console.log(uniqueUpdateData);
  //   setTracks(uniqueData.tracks);
  // });

  // function RankingListRender() {
  //   return <RankingList uniquetracks={tracks} />;
  // }

  function UpdateRankingListRender() {
    return <UpdateRankingList uniquetracks={location.state} />;
  }

  return (
    <div>
      <div className="m-4 text-xl text-gray-800 text-center">
        <FontAwesomeIcon icon={faCrown} />
        オールタイムミュージックランキング
      </div>
      <div className="flex justify-center">{<RankReSetButton />}</div>
      {/* {<RankingListRender />} */}
      {<UpdateRankingListRender />}
    </div>
  );
}
