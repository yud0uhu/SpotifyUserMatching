import { useState } from "react";
import Header from "./components/organisms/Header";
import SearchBox from "./components/organisms/SearchBox";
import UserList from "./components/molecules/UserList";
import SendAction from "./SendAction";
import RankPage from "./components/organisms/RankPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

interface Props {}
export default function App({}: Props) {
  const [dataContainer, setDataContainer] = useState([]);
  const [uniqueData, setUniqueData] = useState([]);

  const handleClear = () => {
    setDataContainer([]);
  };

  const handleChangeDataState = (dataList, param) => {
    const newDataContainer = [...dataContainer, dataList];
    if (param === "") {
      const newDataContainer = [...dataContainer, dataList];
      setDataContainer(newDataContainer);
      console.log(dataList);
    } else {
      setUniqueData(dataList.id);
      console.log(dataList.id);
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
          <Route path="/ranking" element={<RankPage userId={uniqueData} />} />
        </Routes>

        <div className="bg-cover bg-gray-50">
          {dataContainer.map((dataList, index) => (
            <UserList allUsersList={dataList} key={index} />
          ))}
        </div>
      </BrowserRouter>
    </>
  );
}
