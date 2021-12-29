import Header from "./components/organisms/Header";
import SearchBox from "./components/organisms/SearchBox";
import UserList from "./components/molecules/UserList";

export default function Example() {
  return (
    <div>
      <Header />
      <SearchBox />

      <div className="bg-cover bg-gray-50">
        <UserList />
      </div>
    </div>
  );
}
