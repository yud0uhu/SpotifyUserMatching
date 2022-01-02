import Header from "../organisms/Header";

const RankPage = (props: any) => {
  const { userId } = props;

  return (
    <div>
      <h1>RANKING!!!{userId}</h1>
    </div>
  );
};
export default RankPage;
