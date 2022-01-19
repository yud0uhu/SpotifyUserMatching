import { useState, useEffect, useCallback, useContext } from "react";
import Header from "./components/organisms/Header";
import SearchView from "./components/organisms/SearchView";
// import SendAction from "./SendAction";
import ApiConnection from "./api-connection";
import SearchResultView from "./components/organisms/SearchResultView";
import RankResultView from "./components/organisms/RankResultView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

export default function App() {
  const [userId, setuserId] = useState(0);
  // const [dataContainer, setDataContainer] = useState<[][]>([]);
  const [uniqueData, setUniqueData] = useState<[][]>([]);

  console.log(userId);

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
    ApiConnection(userId, handleChangeDataState);
    // SendAction(handleChangeDataState, "");
  };

  const handleClickChange = () => {
    ApiConnection(userId, handleChangeDataState);
    // SendAction(handleChangeDataState, "unique");
  };

  // 画面へレンダリングする要素を定義
  return (
    <>
      <ApolloProvider client={client}>
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
            <Route
              path="/ranking"
              element={<RankResultView userId={userId} />}
            />
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
            <Route
              path="/setting"
              element={<SearchResultView userId={userId} />}
            />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}
