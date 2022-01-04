import { Link } from "react-router-dom";

export default function RankReSetButton() {
  return (
    <>
      <Link to="/setting">
        <button
          type="button"
          className="m-4 bg-white hover:bg-gray-100 text-xs text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          設定し直す
        </button>
      </Link>
    </>
  );
}
