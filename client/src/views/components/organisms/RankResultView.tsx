import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  GetUserRankingList,
  PostUserRankingList,
} from "../../../lib/api-connection";
import RankReSetButton from "../atoms/RankReSetButton";
import UpdateRankingList from "../molecules/UpdateRankingList";

type Props = {
  userId: number;
};
export default function RankResultView(porps: Props) {
  const { userId } = porps;

  function UpdateRankingListRender() {
    PostUserRankingList();
    return <UpdateRankingList />;
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
