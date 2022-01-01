const UserCard = (props: any) => {
  const { userId, twitterId, userName } = props;
  console.log(userName);

  return (
    <>
      <img
        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
        alt="Person"
      />
      <div className="flex flex-col justify-center">
        <div className="text-lg font-bold">
          <p className="text-lg font-bold">{userName}</p>
        </div>
        <p className="text-sm text-gray-800">@dog_one</p>
      </div>
    </>
  );
};
export default UserCard;
