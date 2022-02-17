import React, { useEffect, useState } from "react";
import LoginButton from "../../components/atoms/LoginButton";
import LogoutButton from "../atoms/LogoutButton";
import Profile from "./Profile";

export default function Header(props: any) {
  const [userId, setUserId] = useState(0);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  useEffect(() => props.setuserId(userId), [userId, setUserId]);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3 ">
        <div className="text-xs text-white">
          <span className="ml-2">{<Profile setUserId={setUserId} />}</span>
        </div>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Alltime Music Matchting
            </a>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <span className="ml-2">My Page</span>
              </li>
              <li className="nav-item">
                <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <span className="ml-2">{<LogoutButton />}</span>
                </div>
              </li>
              <li className="nav-item">
                <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <span className="ml-2">{<LoginButton />}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
