import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SearchBox() {
  return (
    <>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 px-4 py-16">
        <div className="bg-white box-content h-32 w-128 p-16 bg-white rounded-lg shadow-xl">
          <h1 className="m-4 text-2xl text-gray-800 text-center">
            あなたの「好き」を見つける。
          </h1>
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <input
              type="text"
              placeholder="曲名を検索"
              className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
            />
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
