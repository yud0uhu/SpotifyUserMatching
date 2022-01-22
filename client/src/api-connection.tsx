import axios from "axios";

// マッチユーザーのリストを取得する
export default function SendAction(
  userId: number,
  handleChangeDataState: Function
) {
  // const userId = 1;
  axios(`http://ec2-54-82-215-43.compute-1.amazonaws.com:8001/user/${userId}`, {
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
