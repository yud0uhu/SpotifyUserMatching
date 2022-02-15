import { faCrown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserList from "../molecules/UserList";
import RankSetButton from "../atoms/RankSetButton";
type Props = {
  dataContainer: [][];
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSearch: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClear: (event: React.MouseEvent<HTMLButtonElement>) => void;
  existsList: boolean;
};
export default function SearchView(props: Props) {
  const { dataContainer, onClick, onSearch, onClear, existsList } = props;

  const action = existsList ? onSearch : onClear;

  return (
    <>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 px-4 py-16">
        <div className="bg-white box-content h-32 w-128 p-16 bg-white rounded-lg shadow-xl">
          <h1 className="m-4 text-2xl text-gray-800 text-center">
            あなたの「好き」を見つける。
          </h1>
          <p className="m-4 text-s text-gray-800 text-center">
            <FontAwesomeIcon icon={faCrown} />
            オールタイムミュージックランキング
            <RankSetButton onClick={onClick} />
          </p>
          <button className="text-xl" onClick={action} type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="bg-cover bg-gray-50">
        {dataContainer.map((dataList: [], index: number) => (
          <UserList allUsersList={dataList} key={index} />
        ))}
      </div>
    </>
  );
}
