import { Link } from "react-router-dom";
import UpdateRankingList from "../molecules/UpdateRankingList";
export default function UpdateButton(props: any) {
  const { userId, trackId, trackName, audio, coverArt } = props;

  const onClick = () => {
    // APIにデータを返す
    <UpdateRankingList
      userId={userId}
      trackId={trackId}
      trackName={trackName}
      audio={audio}
      coverArt={coverArt}
    />;
  };

  return (
    <>
      <Link to="/ranking">
        <button
          type="button"
          onClick={onClick}
          className="m-4 bg-white hover:bg-gray-100 text-xs text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          更新する
        </button>
      </Link>
    </>
  );
}
