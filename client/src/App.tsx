import { useState, useEffect, useCallback } from "react";
import Header from "./components/organisms/Header";
import SearchBox from "./components/organisms/SearchBox";
import UserList from "./components/molecules/UserList";
import SendAction from "./SendAction";
import RankPage from "./components/organisms/RankPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateRankModal from "./components/organisms/UpdateRankModal";
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
                <SearchBox
                  onClick={handleClickChange}
                  onSearch={handleSearch}
                  onClear={handleClear}
                />
              }
            />
            <Route
              path="/ranking"
              element={uniqueData.map((dataList, index) => (
                <RankPage uniqueData={dataList} key={index} />
              ))}
            />
            <Route path="/setting" element={<UpdateRankModal />} />
            {/* <Route
            path="/ranking"
            element={<RankPage uniqueData={uniqueData} />}
          /> */}
          </Routes>

          <div className="bg-cover bg-gray-50">
            {dataContainer.map((dataList, index) => (
              <UserList allUsersList={dataList} key={index} />
            ))}
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}
