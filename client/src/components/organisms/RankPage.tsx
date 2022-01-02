import { faCrown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RankingList from "../molecules/RankingList";

const RankPage = (props: any) => {
  const { uniqueData } = props;
  console.log(uniqueData[0]);

  return (
    <div>
      {uniqueData[0].userName}さんのマイページ
      <div className="m-4 text-xl text-gray-800 text-center">
        <FontAwesomeIcon icon={faCrown} />
        オールタイムミュージックランキング
        <RankingList uniquetracks={uniqueData[0].tracks} />
      </div>
    </div>
  );
};
export default RankPage;
