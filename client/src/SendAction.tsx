import { useEffect } from "react";
import axios from "axios";

export default function SendAction(handleChangeDataState: any, query: string) {
  if (query == "") {
    console.log("query");
    return;
  }
  axios.get(`https://pokeapi.co/api/v2/pokemon/1`).then((res) => {
    console.log(handleChangeDataState);
    console.log(res);
    console.log(res.data);
    handleChangeDataState(res.data);
  });
}
