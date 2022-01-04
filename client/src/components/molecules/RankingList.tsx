/* This example requires Tailwind CSS v2.0+ */

import RankingCard from "../atoms/RankingCard";
const RankingList = (props: any) => {
  const { uniquetracks } = props;
  // console.log(uniquetracks);
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
};
export default RankingList;
