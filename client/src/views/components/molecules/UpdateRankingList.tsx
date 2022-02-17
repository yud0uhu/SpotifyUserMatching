import { useLocation } from "react-router-dom";
import { GetUserRankingList } from "../../../lib/api-connection";
import UpdateRankingCard from "../atoms/UpdateRankingCard";

export default function UpdateRankingList() {
  const params = useLocation();

  const uniquetracks: any = params.state;

  if (uniquetracks === null) {
    return <div></div>;
  }

  console.log(GetUserRankingList(uniquetracks.userId));

  return (
    <>
      <div className="text-center space-x-4 text-xl space-y-12"></div>
      <div className="bg-cover bg-gray-50">
        Your Favorite Songs
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          {/* useLocationからパラメータを取得 */}
          Latest:
          <UpdateRankingCard
            trackId={uniquetracks.trackId}
            trackName={uniquetracks.trackName}
            audio={uniquetracks.audio}
            coverArt={uniquetracks.coverArt}
            key={uniquetracks.trackId}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          Old:
          {/* DBからリストを取得 */}
          {/* {tracks.map((track: any) => (
            <UpdateRankingCard
              trackId={track.trackId}
              trackName={track.trackName}
              audio={track.audio}
              coverArt={track.coverArt}
              key={track.trackId}
            />
          ))} */}
        </div>
      </div>
    </>
  );
}
