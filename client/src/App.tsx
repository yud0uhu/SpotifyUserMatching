import { useState, useEffect, useCallback } from "react";
import Header from "./components/organisms/Header";
import SearchView from "./components/organisms/SearchView";
// import SendAction from "./SendAction";
import ApiConnection from "./ApiConnection";
import SearchResultView from "./components/organisms/SearchResultView";
import RankResultView from "./components/organisms/RankResultView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

interface Props {}
export default function App({}: Props) {
  // const [dataContainer, setDataContainer] = useState<[][]>([]);
  const [uniqueData, setUniqueData] = useState<[][]>([]);

  const handleClear = () => {
    // setDataContainer([]);
    console.log("Clear!");
    setUniqueData([]);
  };
  const handleChangeDataState = (dataList: []) => {
    const newUniqueData = [...uniqueData, dataList];

    setUniqueData(newUniqueData);
  };
  const handleSearch = () => {
    ApiConnection(handleChangeDataState);
    // SendAction(handleChangeDataState, "");
  };

  const handleClickChange = () => {
    ApiConnection(handleChangeDataState);
    // SendAction(handleChangeDataState, "unique");
  };

  // 画面へレンダリングする要素を定義
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
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
            <Route path="/ranking" element={<RankResultView />} />
            {/* DBのモックデータを初期データとして渡す */}
            {/* <Route
              path="/ranking"
              element={uniqueData.map((dataList, index) => (
                <RankResultView
                  userId={dataList.id}
                  uniqueData={dataList}
                  key={index}
                />
              ))}
            /> */}
            <Route path="/setting" element={<SearchResultView />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}
