import { useState } from "react";
import Header from "./views/components/organisms/Header";
import SearchView from "./views/components/organisms/SearchView";
import GetMatchUserList from "./lib/api-connection";
import SearchResultView from "./views/components/organisms/SearchResultView";
import RankResultView from "./views/components/organisms/RankResultView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [userId, setuserId] = useState(0);
  const [uniqueData, setUniqueData] = useState<[][]>([]);

  console.log(userId);

  const handleClear = () => {
    console.log("Clear!");
    setUniqueData([]);
  };
  const handleChangeDataState = (dataList: []) => {
    const newUniqueData = [...uniqueData, dataList];

    setUniqueData(newUniqueData);
  };
  const handleSearch = () => {
    GetMatchUserList(userId, handleChangeDataState);
  };

  const handleClickChange = () => {
    GetMatchUserList(userId, handleChangeDataState);
  };

  // 画面へレンダリングする要素を定義
  return (
    <>
      <Header setuserId={setuserId} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SearchView
                dataContainer={uniqueData}
                onClick={handleClickChange}
                onSearch={handleSearch}
                onClear={handleClear}
                existsList={uniqueData.length === 0}
              />
            }
          />
          <Route path="/ranking" element={<RankResultView userId={userId} />} />
          <Route
            path="/setting"
            element={<SearchResultView userId={userId ? userId : 0} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
