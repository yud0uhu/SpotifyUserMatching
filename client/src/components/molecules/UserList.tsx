/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard from "../atoms/UserCard";
const UserList = (props: any) => {
  const { allUsersList } = props;

  console.log(allUsersList);

  // const UserCardList = allUsersList[0].map((allusers: any) => (
  //   <UserCard
  //     userId={allusers.id}
  //     twitterId={allusers.twitter_id}
  //     userName={allusers.user_name}
  //     key={allusers.id}
  //   />
  // ));

  const MatchUser1CardList = allUsersList[0].map((allusers: any) => (
    <UserCard
      userId={allusers.id}
      twitterId={allusers.twitter_id}
      userName={allusers.user_name}
      key={allusers.id}
    />
  ));

  const MatchUser2CardList = allUsersList[1].map((allusers: any) => (
    <UserCard
      userId={allusers.id}
      twitterId={allusers.twitter_id}
      userName={allusers.user_name}
      key={allusers.id}
    />
  ));

  return (
    <>
      <div className="text-center space-x-4 dark:text-gray-50 text-gray-900 text-lg">
        <span>
          <FontAwesomeIcon icon={faCrown} />
        </span>
        <span>USERさんと相性が合いそうなユーザー</span>
      </div>
      <div className="text-center space-x-4 text-xl space-y-12">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm leading-6 truncate">
          相性20%マッチ
        </h2>
      </div>
      <div className="bg-cover bg-gray-50">
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          {MatchUser1CardList}
        </div>
      </div>
      <div className="text-center space-x-4 text-xl space-y-12">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm leading-6 truncate">
          相性15%マッチ
        </h2>
      </div>
      <div className="bg-cover bg-gray-50">
        <div className="grid grid-cols-3 gap-4 justify-items-auto">
          {MatchUser2CardList}
        </div>
      </div>
    </>
  );
};
export default UserList;
