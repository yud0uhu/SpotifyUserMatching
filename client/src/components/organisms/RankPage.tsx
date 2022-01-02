import { faCrown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RankPage = (props: any) => {
  const { uniqueData } = props;

  return (
    <div>
      {uniqueData.userName}さんのマイページ
      <p className="m-4 text-xl text-gray-800 text-center">
        <FontAwesomeIcon icon={faCrown} />
        オールタイムミュージックランキング
      </p>
    </div>
  );
};
export default RankPage;
