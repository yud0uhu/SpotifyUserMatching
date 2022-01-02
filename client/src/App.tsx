import { useState } from "react";
import Header from "./components/organisms/Header";
import SearchBox from "./components/organisms/SearchBox";
import UserList from "./components/molecules/UserList";
import SendAction from "./SendAction";
import RankPage from "./components/organisms/RankPage";
import { Router, Route } from "react-router-dom";

interface Props {}
export default function App({}: Props) {
  const [dataContainer, setDataContainer] = useState([]);

  const handleClear = () => {
    setDataContainer([]);
  };

  const handleChangeDataState = (dataList) => {
    const newDataContainer = [...dataContainer, dataList];
    setDataContainer(newDataContainer);
    console.log(dataList);
  };

  const handleSearch = () => {
    SendAction(handleChangeDataState);
  };

  // 画面へレンダリングする要素を定義
  return (
    <>
      <Header />
      <SearchBox onSearch={handleSearch} onClear={handleClear} />
      <div className="bg-cover bg-gray-50">
        {dataContainer.map((dataList, index) => (
          <UserList allUsersList={dataList} key={index} />
        ))}
      </div>
      {/* <Router history={history}>
        <div>
          <Route path="/ranking" exact component={RankPage} />
        </div>
      </Router> */}
    </>
  );
}
