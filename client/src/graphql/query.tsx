import { gql } from "@apollo/client";

// 全件取得
export const GET_ALLUSERS = gql`
  query getAllUsers {
    allUsers {
      id
      twitterId
      userName
      tracks {
        userId
        trackId
        trackName
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

// export const CREATE_USER = gql`
//   mutation createUser($userId: Int, $twitterId: String!, $userName: String!) {
//     createuser(userId: $userId, twitterId: $twitterId, userName: $userName) {
//       userId
//       twitterId
//       userName
//     }
//   }
// `;

export const CREATE_TRACKS = gql`
  mutation createTrack($trackId: Int!, $userId: Int!) {
    createTrack(userId: userId, trackId: trackId) {
      track {
        userId
        trackId
      }
      ok
    }
  }
`;

export const QUERY_USERS = gql`
  query {
    usertype {
      id
      userName
      twitterId
    }
  }
`;

export const QUERY_TRACKS = gql`
  query {
    track {
      trackId
      trackName
      coverArt
      audio
      coverArt
      userId
    }
  }
`;
