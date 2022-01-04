import RankingCard from "../atoms/RankingCard";
import { useMutation } from "@apollo/client";
import { CREATE_TRACKS } from "../../graphql/query";

export default function UpdateRankingList(props: any) {
  const { userId, trackId, trackName, audio, coverArt } = props;

  const [createTracks, { loading, error }] = useMutation(CREATE_TRACKS);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  // APIにデータを返す
  createTracks({
    variables: {
      userId: userId,
      trackId: trackId,
      trackName: trackName,
      audio: audio,
      coverArt: coverArt,
    },
  });

  // const updateRankingCardList = uniquetracks.map((uniquetrack: any) => (
  //   <RankingCard
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
          {createTracks}
        </div>
      </div>
    </>
  );
}
