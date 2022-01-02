import { useNavigate } from "react-router-dom";

const RankSetButton = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/ranking");
  }
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="m-4 bg-white hover:bg-gray-100 text-xs text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        設定する
      </button>
    </>
  );
};
export default RankSetButton;
