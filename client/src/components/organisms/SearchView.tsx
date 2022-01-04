import { faCrown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RankSetButton from "../atoms/RankSetButton";
export default function SearchView(props: any) {
  const { onClick, onSearch, onChange, onClear } = props;

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
          <button className="text-xl" onClick={onSearch} type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </>
  );
}
