import React from "react";
import LoginButton from "../../components/atoms/LoginButton";
import LogoutButton from "../atoms/LogoutButton";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3 ">
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
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/ranking"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75">
                    <span className="ml-2">My Page</span>
                  </i>
                </a>
              </li>
              <li className="nav-item">
                <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75">
                    <span className="ml-2">{<LogoutButton />}</span>
                  </i>
                </div>
              </li>
              <li className="nav-item">
                <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75">
                    <span className="ml-2">{<LoginButton />}</span>
                  </i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
