import { useLocation } from "react-router-dom";
import { faCrown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RankReSetButton from "../atoms/RankReSetButton";
import UpdateRankingList from "../molecules/UpdateRankingList";

export default function RankResultView(porps: any) {
  const { userId } = porps;

  const location = useLocation();

  console.log(location.state);

  function UpdateRankingListRender() {
    return <UpdateRankingList userId={userId} uniquetracks={location.state} />;
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
