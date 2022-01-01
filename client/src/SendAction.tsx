// import { useEffect } from "react";
// import axios from "axios";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

import UserList from "./components/molecules/UserList";

// GraphQL
export default function SendAction(handleChangeDataState: any) {
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
  });

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
      let postdata = result.data.allUsers;
      if (postdata !== undefined) {
        console.log(postdata);
        handleChangeDataState(postdata);
      }
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
