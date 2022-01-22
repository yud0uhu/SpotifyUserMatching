import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard from "../atoms/UserCard";
type Props = {
  allUsersList: string;
};
const UserList = (props: Props) => {
  const { allUsersList } = props;

  console.log(allUsersList);

  const HighMatchUserCardList = allUsersList[0].map((allusers: any) => (
    <UserCard
      userId={allusers.id}
      twitterId={allusers.twitter_id}
      userName={allusers.user_name}
      profileImageUrl={allusers.profile_image_url}
      key={allusers.id}
    />
  ));

  // const MiddleMatchUserCardList = allUsersList[1].map((allusers: any) => (
  //   <UserCard
  //     userId={allusers.id}
  //     twitterId={allusers.twitter_id}
  //     userName={allusers.user_name}
  //     key={alluser.id}
  //   />
  // ));

  // const LowMatchUserCardList = allUsersList[2].map((allusers: any) => (
  //   <UserCard
  //     userId={allusers.id}
  //     twitterId={allusers.twitter_id}
  //     userName={allusers.user_name}
  //     key={allusers.id}
  //   />
  // ));

  return (
    <>
      <div className="text-center space-x-4 dark:text-gray-50 text-gray-900 text-lg">
        <span>
          <FontAwesomeIcon icon={faCrown} />
        </span>
        <span>あなたと相性が合いそうなユーザー</span>
      </div>
      <div className="text-center space-x-4 text-xl space-y-12">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm leading-6 truncate">
          相性20%マッチ
        </h2>
      </div>
      <div className="bg-cover bg-gray-50">
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          {HighMatchUserCardList}
        </div>
      </div>
      <div className="text-center space-x-4 text-xl space-y-12">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm leading-6 truncate">
          相性15%マッチ
        </h2>
      </div>
      <div className="bg-cover bg-gray-50">
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          {/* {MiddleMatchUserCardList} */}
        </div>
      </div>
    </>
  );
};
export default UserList;
