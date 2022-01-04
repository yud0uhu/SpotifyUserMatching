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

export const CREATE_USER = gql`
  mutation createUser(
    $userId: String!
    $twitterId: String!
    $userName: String!
  ) {
    createuser(userId: $userId, twitterId: $twitterId, userName: $userName) {
      userId
      twitterId
      userName
    }
  }
`;

export const CREATE_TRACKS = gql`
  mutation createUser(
    $userId: String!
    $twitterId: String!
    $userName: String!
  ) {
    createuser(userId: $userId, twitterId: $twitterId, userName: $userName) {
      userId
      twitterId
      userName
    }
  }
`;
