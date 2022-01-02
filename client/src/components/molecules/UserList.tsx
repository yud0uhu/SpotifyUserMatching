/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard from "../atoms/UserCard";
const UserList = (props: any) => {
  const { allUsersList } = props;

  console.log(allUsersList);

  const UserCardList = allUsersList.map((allusers: any) => (
    <UserCard
      userId={allusers.id}
      twitterId={allusers.twitterId}
      userName={allusers.userName}
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
      {/* <UserCard
        userId={allUsersList.id}
        twitterId={allUsersList.twitterId}
        userName={allUsersList.userName}
        key={allUsersList.id}
      /> */}
      {UserCardList}
      <div className="text-center space-x-4 text-xl space-y-12">
        <h2 className="text-gray-500 dark:text-gray-400 text-sm leading-6 truncate">
          相性15%マッチ
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-auto h-48">
        <div className="text-gray-700 flex justify-center items-center px-4 py-4">
          <div className="bg-white box-content h-32 w-128 p-16 bg-white rounded-lg shadow-xl">
            <div className="flex">
              <img
                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg font-bold">Neko</p>
                <p className="text-sm text-gray-800">@dog_one</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex justify-center items-center px-4 py-4">
          <div className="bg-white box-content h-32 w-128 p-16 bg-white rounded-lg shadow-xl">
            <div className="flex">
              <img
                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg font-bold">Neko</p>
                <p className="text-sm text-gray-800">@dog_one</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex justify-center items-center px-4 py-4">
          <div className="bg-white box-content h-32 w-128 p-16 bg-white rounded-lg shadow-xl">
            <div className="flex">
              <img
                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg font-bold">Neko</p>
                <p className="text-sm text-gray-800">@dog_one</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserList;
