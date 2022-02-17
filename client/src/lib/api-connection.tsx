import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// マッチユーザーのリストを取得する
export const GetMatchUserList = (
  userId: number,
  handleChangeDataState: Function
) => {
  useEffect(() => {
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
  }, [userId]);
};

// uniquetracksは配列にし、順々に追加したい
// 1. DBを更新する(ここではユニークなキーとしてIDを渡すこと)
export const PostUserRankingList = () =>
  // userId: number,
  // trackId: number,
  // trackName: string
  {
    const params = useLocation();
    const uniquetracks: any = params.state;
    const userId = uniquetracks.userId;
    const trackId = uniquetracks.trackId;
    const trackName = uniquetracks.trackName;
    useEffect(() => {
      axios(
        `https://alltime-music-ranking.herokuapp.com/${userId}/ranking/${trackId}/${trackName}`,
        {
          method: "POST",
        }
      )
        .then((FeatureResponse) => {
          console.log(FeatureResponse);
        })
        .catch((err) => {
          console.log("err:", err);
        });
    }, [trackId]);
  };

export const GetUserRankingList = (userId: number) => {
  // const params = useLocation();
  // const uniquetracks: any = params.state;
  // const userId = uniquetracks.userId;
  useEffect(() => {
    axios(`https://alltime-music-ranking.herokuapp.com/${userId}/ranking`, {
      method: "GET",
    })
      // 楽曲情報のリストを取得する
      .then((TrackInfoResponse) => {
        console.log(TrackInfoResponse.data);
        const trackInfoResponse = TrackInfoResponse.data.map(
          (index: number) => index
        );
        console.log("select_feature_track_response:" + trackInfoResponse);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, [userId]);
};
