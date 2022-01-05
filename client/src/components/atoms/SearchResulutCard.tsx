import UpdateButton from "./UpdateButton";

export default function SearchResultCard(props: any) {
  const { userId, trackId, trackName, audio, coverArt, externalUrls } = props;

  return (
    <>
      <div className="text-gray-700 flex justify-center items-center px-4 py-4">
        <div className="bg-white box-content h-128 w-128 p-16 bg-white rounded-lg shadow-xl">
          <div className="flex"></div>

          <div className="flex flex-col justify-center">
            <div className="text-lg font-bold">{trackName}</div>
          </div>
          <div className="flex flex-col justify-center">
            <a href={externalUrls} target="_blank">
              <img src={coverArt} alt="アルバム画像" />
            </a>
            <a href={audio}>視聴する</a>
            <div className="flex justify-center">
              {
                <UpdateButton
                  userId={userId}
                  trackId={trackId}
                  trackName={trackName}
                  audio={audio}
                  coverArt={coverArt}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
