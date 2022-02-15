import axios from "axios";

// マッチユーザーのリストを取得する
export default function SendAction(
  userId: number,
  handleChangeDataState: Function
) {
  // const userId = 1;
  axios(`http://alltime-music-ranking.herokuapp.com/user/${userId}`, {
    method: "GET",
  })
    .then((UserResponse) => {
      let UsersData = UserResponse.data;
      handleChangeDataState(UsersData);
      console.log(UsersData);
    })
    .catch((err) => {
      console.log("err:", err);
    });
}
