import { useState, useEffect, useCallback } from "react";
import Header from "./components/organisms/Header";
import SearchView from "./components/organisms/SearchView";
import SendAction from "./SendAction";
import SearchResultView from "./components/organisms/SearchResultView";
import RankResultView from "./components/organisms/RankResultView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

interface Props {}
export default function App({}: Props) {
  const [dataContainer, setDataContainer] = useState<[][]>([]);
  const [uniqueData, setUniqueData] = useState<[][]>([]);

  const handleClear = () => {
    setDataContainer([]);
  };
  const handleChangeDataState = (dataList: [], param: string) => {
    if (param === "") {
      const newDataContainer = [...dataContainer, dataList];

      setDataContainer(newDataContainer);

      console.log(param);
    } else {
      const newUniqueData = [...uniqueData, dataList];

      setUniqueData(newUniqueData);

      console.log(param);
    }
  };
  const handleSearch = () => {
    SendAction(handleChangeDataState, "");
  };

  const handleClickChange = () => {
    SendAction(handleChangeDataState, "unique");
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
                  dataContainer={dataContainer}
                  onClick={handleClickChange}
                  onSearch={handleSearch}
                  onClear={handleClear}
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
