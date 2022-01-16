export default function UserCard(props: any) {
  const { userId, twitterId, userName, profileImageUrl } = props;

  console.log(userId);

  return (
    <>
      <div className="text-gray-700 flex justify-center items-center px-4 py-4">
        <div className="bg-white box-content h-32 w-128 p-16 bg-white rounded-lg shadow-xl">
          <div className="flex"></div>
          {/* <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          /> */}
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src={profileImageUrl}
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <div className="text-lg font-bold">{userName}</div>
            <p className="text-sm text-gray-800">@{twitterId}</p>
          </div>
        </div>
      </div>
    </>
  );
}
