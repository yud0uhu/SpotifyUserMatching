import { useLocation } from "react-router-dom";
import { faCrown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RankReSetButton from "../atoms/RankReSetButton";
import UpdateRankingList from "../molecules/UpdateRankingList";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  userId: number;
};
export default function RankResultView(porps: Props) {
  const { userId } = porps;

  function UpdateRankingListRender() {
    return <UpdateRankingList userId={userId} />;
  }

  return (
    <div>
      <div className="m-4 text-xl text-gray-800 text-center">
        <FontAwesomeIcon icon={faCrown} />
        オールタイムミュージックランキング
      </div>
      <div className="flex justify-center">{<RankReSetButton />}</div>
      {<UpdateRankingListRender />}
    </div>
  );
}
