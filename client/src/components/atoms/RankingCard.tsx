const RankingCard = (props: any) => {
  const { trackId, trackName, audio, coverArt } = props;

  return (
    <>
      <div className="text-gray-700 flex justify-center items-center px-4 py-4">
        <div className="bg-white box-content h-128 w-128 p-16 bg-white rounded-lg shadow-xl">
          <div className="flex"></div>

          <div className="flex flex-col justify-center">
            <div className="text-lg font-bold">{trackName}</div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={coverArt} alt="アルバム画像" />
            <a href={audio}>視聴する</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default RankingCard;
