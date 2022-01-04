import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResulutCard from "../atoms/SearchResulutCard";
export default function SeacrchResultList(props: string) {
  const navigate = useNavigate();
  const { userId, trackTerm } = props;
  const [albumTrack, setAlbumTrack] = useState([]);

  const trackPreview = (trackTerm) => {
    axios(`http://localhost:8000/search/${trackTerm}`, {
      method: "GET",
    })
      .then((AlbumResponse) => {
        const albumResponse = AlbumResponse.data.map((index: number) => index);
        const alubums = albumResponse.map((alubum) => alubum);
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
      {searchResulutCardList}
    </>
  );
}
