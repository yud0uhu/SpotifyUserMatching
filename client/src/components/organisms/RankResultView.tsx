import { faCrown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import RankReSetButton from "../atoms/RankReSetButton";
import RankingList from "../molecules/RankingList";

export default function RankResultView(props: any) {
  const { uniqueData } = props;
  const [tracks, setTracks] = useState([]);
  console.log(uniqueData);

  useEffect(() => {
    console.log("useEffectが実行されました");
    setTracks(uniqueData.tracks);
  });

  function RankingListRender() {
    return <RankingList uniquetracks={tracks} />;
  }

  return (
    <div>
      <div className="m-4 text-xl text-gray-800 text-center">
        <FontAwesomeIcon icon={faCrown} />
        オールタイムミュージックランキング
      </div>
      <div className="flex justify-center">{<RankReSetButton />}</div>
      {<RankingListRender />}
    </div>
  );
}
