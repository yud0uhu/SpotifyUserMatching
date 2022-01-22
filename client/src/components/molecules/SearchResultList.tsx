import axios from "axios";
import { useEffect, useState } from "react";
import SearchResulutCard from "../atoms/SearchResulutCard";
type Props = {
  userId: number;
  trackTerm: string;
};
export default function SeacrchResultList(props: Props) {
  const { userId, trackTerm } = props;
  const [albumTrack, setAlbumTrack] = useState([]);

  const trackPreview = (trackTerm: number) => {
    axios(
      `http://http://ec2-54-82-215-43.compute-1.amazonaws.com/search/${trackTerm}`,
      {
        method: "GET",
      }
    )
      .then((AlbumResponse) => {
        const albumResponse = AlbumResponse.data.map((index: number) => index);
        const alubums = albumResponse.map((alubum: number) => alubum);
        console.log(alubums);
        setAlbumTrack(alubums);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const searchResulutCardList = albumTrack.map((alubum: any) => (
    <SearchResulutCard
      userId={userId}
      trackId={alubum.id}
      trackName={alubum.name}
      audio={alubum.preview_url}
      coverArt={alubum.album.images[1].url}
      externalUrls={alubum.external_urls.spotify}
      key={alubum.id}
    />
  ));

  return (
    <>
      <button
        type="button"
        onClick={() => trackPreview(trackTerm)}
        className="m-4 bg-white hover:bg-gray-100 text-xs text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        決定
      </button>
      <div className="text-center space-x-4 text-xl space-y-12"></div>
      <div className="bg-cover bg-gray-50">
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          {searchResulutCardList}
        </div>
      </div>
    </>
  );
}
