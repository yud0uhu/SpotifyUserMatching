import { GET_ALLUSERS } from "./graphql/query";
import client from "./graphql/client";

// GraphQL
export default function SendAction(
  handleChangeDataState: Function,
  param: string
) {
  client
    .query({
      // すべてのユーザー情報を取得
      query: GET_ALLUSERS,
    })
    .then((result) => {
      // すべてのユーザー情報が格納された配列を渡す
      let allUsersData = result.data.allUsers;
      if (allUsersData !== undefined) {
        console.log(allUsersData);
        if (param === "") {
          handleChangeDataState(allUsersData, "");
        }
        if (param === "unique") {
          // 一意のユーザーの情報が格納された配列を渡す
          let UsersData = allUsersData[0];
          console.log(UsersData);
          handleChangeDataState(UsersData, param);
        }
      }
      // マッチング度20%のユーザー情報を取得
      // let matchUsersData1 = result.data.allUsers;
      // if (matchUsersData1 !== undefined) {
      //   handleChangeDataState(matchUsersData1);
      // }

      // マッチング度15%のユーザー情報を取得
      // let matchUsersData2 = result.data.allUsers;
      // if (matchUsersData2 !== undefined) {
      //   handleChangeDataState(matchUsersData2);
      // }
    });
}
