import axios from "axios";

// マッチユーザーのリストを取得する
export default function GetMatchUserList(
  userId: number,
  handleChangeDataState: Function
) {
  // const userId = 1;
  axios(`https://alltime-music-ranking.herokuapp.com/user/${userId}`, {
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