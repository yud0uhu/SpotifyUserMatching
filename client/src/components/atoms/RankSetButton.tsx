import { Link } from "react-router-dom";

const RankSetButton = (props: any) => {
  const { onClick } = props;

  return (
    <>
      <Link to="/ranking">
        <button
          type="button"
          onClick={onClick}
          className="m-4 bg-white hover:bg-gray-100 text-xs text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          設定する
        </button>
      </Link>
    </>
  );
};
export default RankSetButton;
