import { useState } from "react";
import Header from "./components/organisms/Header";
import SearchBox from "./components/organisms/SearchBox";
import UserList from "./components/molecules/UserList";
import SendAction from "./SendAction";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [dataContainer, setDataContainer] = useState([]);

  const handleClear = () => {
    // ここに処理を記述
    // Idをもとに空の配列をもってきてフォームを初期化する
    setDataContainer([]);
  };

  const handleChangeDataState = (dataList: never) => {
    const newDataContainer = [...dataContainer, dataList];
    setDataContainer(newDataContainer[0]["id"]);
  };

  const handleChange = (event: any) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    // console.log(newSearchText);
    // console.log(searchText);
  };

  const handleSearch = () => {
    SendAction(handleChangeDataState, searchText);
  };

  return (
    <div>
      <Header />
      <SearchBox
        onSearch={handleSearch}
        onChange={handleChange}
        onClear={handleClear}
      />
      <div>{dataContainer}</div>
      <div className="bg-cover bg-gray-50">
        <UserList userId={dataContainer} />
      </div>
    </div>
  );
}
