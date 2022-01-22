import { useNavigate } from "react-router-dom";
export default function UpdateButton(props: any) {
  const navigate = useNavigate();
  const { userId, trackId, trackName, audio, coverArt } = props;

  console.log(trackName);

  const handleClick = () => {
    navigate("/ranking", {
      state: {
        userId: userId,
        trackId: trackId,
        trackName: trackName,
        audio: audio,
        coverArt: coverArt,
      },
      replace: false,
    });
  };
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="m-4 bg-white hover:bg-gray-100 text-xs text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        更新する
      </button>
    </>
  );
}
