// import { useEffect } from "react";
// import axios from "axios";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

// GraphQL
export default function SendAction(handleChangeDataState, param: string) {
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
  });

  // すべてのユーザー情報を取得
  const query = gql`
    {
      allUsers {
        id
        twitterId
        userName
        tracks {
          userId
          trackId
          trackName
          audio
          coverArt
          featureTracks {
            trackId
            danceability
            acousticness
            energy
            mode
          }
        }
      }
    }
  `;

  client
    .query({
      query,
    })
    .then((result) => {
      // すべてのユーザー情報が格納された配列を渡す
      let allUsersData = result.data.allUsers;
      if (allUsersData !== undefined) {
        // console.log(allUsersData);
        if (param === "") {
          handleChangeDataState(allUsersData, "");
        } else {
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

// REST API
// export default function SendAction(handleChangeDataState: any, query: string) {
//   if (query == "") {
//     console.log("query");
//     return;
//   }
//   axios.get(`https://pokeapi.co/api/v2/pokemon/1`).then((res) => {
//     console.log(handleChangeDataState);
//     console.log(res);
//     console.log(res.data);
//     handleChangeDataState(res.data);
//   });
// }
