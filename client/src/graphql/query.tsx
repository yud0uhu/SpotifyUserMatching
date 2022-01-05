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
  mutation createTrack(
    $trackId: String!
    $trackName: String!
    $audio: String!
    $coverArt: String!
    $userId: String!
  ) {
    createTrack(
      trackData: {
        trackId: $trackId
        trackName: $trackName
        audio: $audio
        coverArt: $coverArt
        userId: $userId
      }
    ) {
      track {
        trackId
        trackName
        audio
        coverArt
        userId
      }
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
