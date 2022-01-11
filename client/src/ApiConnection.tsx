import axios from "axios";

// マッチユーザーのリストを取得する
export default function SendAction(handleChangeDataState: Function) {
  const userId = 1;
  axios(`http://localhost:8000/user/${userId}`, {
    method: "GET",
  })
    .then((UserResponse) => {
      let UsersData = UserResponse.data;
      handleChangeDataState(UsersData);
    })
    .catch((err) => {
      console.log("err:", err);
    });
}