import RankingCard from "../atoms/RankingCard";
export default function RankingList(props: any) {
  const { uniquetracks } = props;
  const rankingCardList = uniquetracks.map((uniquetrack: any) => (
    <RankingCard
      trackId={uniquetrack.trackId}
      trackName={uniquetrack.trackName}
      audio={uniquetrack.audio}
      coverArt={uniquetrack.coverArt}
      key={uniquetrack.trackId}
    />
  ));

  return (
    <>
      <div className="text-center space-x-4 text-xl space-y-12"></div>
      <div className="bg-cover bg-gray-50">
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          {rankingCardList}
        </div>
      </div>
    </>
  );
}
