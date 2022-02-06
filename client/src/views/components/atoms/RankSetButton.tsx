import { Link, useNavigate } from "react-router-dom";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export default function RankSetButton(props: Props) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/ranking", {
      state: {},
      replace: false,
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="m-4 bg-white hover:bg-gray-100 text-xs text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        設定する
      </button>
    </>
  );
}
