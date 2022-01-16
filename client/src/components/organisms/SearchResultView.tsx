import { useState } from "react";
import { faCrown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchResultList from "../molecules/SearchResultList";

interface props {
  userId: number;
}
export default function SearchResultView(userId: number) {
  const [trackTerm, setTrackTerm] = useState<string>("");

  const handleInputChange = (e) => {
    setTrackTerm(() => e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="m-4 text-xl text-gray-800 text-center">
        <FontAwesomeIcon icon={faCrown} />
        ＜オールタイムミュージックランキング＞設定画面
        <div className="rounded-lg bg-white shadow-lg p-16">
          <div className="flex justify-center">
            <form className="relative flex w-full flex-wrap items-stretch mb-3">
              <input
                value={trackTerm}
                onChange={handleInputChange}
                type="text"
                placeholder="曲名を入力してください"
                className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
              />
            </form>
          </div>
        </div>
      </div>

      <div>{<SearchResultList userId={userId} trackTerm={trackTerm} />}</div>
    </div>
  );
}
