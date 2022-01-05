// import { useMutation } from "@apollo/client";
// import { CREATE_TRACKS } from "../../graphql/query";
import UpdateRankingCard from "../atoms/UpdateRankingCard";

export default function UpdateRankingList(props: any) {
  const { uniquetracks } = props;

  if (uniquetracks === null) {
    return <div></div>;
  }

  // const { uniquetracks, userId, trackId, trackName, audio, coverArt } = props;

  // const [createTracks, { data, loading, error }] = useMutation(CREATE_TRACKS);
  // if (loading) return <div>"Submitting..."</div>;
  // if (error) return <div>`Submission error! ${error.message}`</div>;

  // // APIにデータを返す
  // createTracks({
  //   variables: {
  //     userId: uniquetracks.userId,
  //     trackId: uniquetracks.trackId,
  //     trackName: uniquetracks.trackName,
  //     audio: uniquetracks.audio,
  //     coverArt: uniquetracks.coverArt,
  //   },
  // });

  // console.log(data);

  // const updateRankingCardList = uniquetracks.map((uniquetrack: any) => (
  //   <UpdateRankingCard
  //     trackId={uniquetrack.trackId}
  //     trackName={uniquetrack.trackName}
  //     audio={uniquetrack.audio}
  //     coverArt={uniquetrack.coverArt}
  //     key={uniquetrack.trackId}
  //   />
  // ));

  return (
    <>
      <div className="text-center space-x-4 text-xl space-y-12"></div>
      <div className="bg-cover bg-gray-50">
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          {/* {updateRankingCardList} */}
          <UpdateRankingCard
            trackId={uniquetracks.trackId}
            trackName={uniquetracks.trackName}
            audio={uniquetracks.audio}
            coverArt={uniquetracks.coverArt}
            key={uniquetracks.trackId}
          />
        </div>
      </div>
    </>
  );
}
