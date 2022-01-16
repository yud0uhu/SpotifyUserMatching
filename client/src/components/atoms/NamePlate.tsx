import App from "../../App";

const NamePlate = (props) => {
  const { userId } = props;
  <App userId={userId} />;

  return (
    <>
      <ul>　ようこそ、{userId ? userId : "undefined"}さん</ul>
    </>
  );
};
export default NamePlate;
