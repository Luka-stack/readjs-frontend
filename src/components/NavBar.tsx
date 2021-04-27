import Axios from "axios";
import Link from "next/link";
import { Fragment } from "react";

import { useAuthState, useAuthDispatch } from "../context/auth";

import ReadjsLogo from "../images/readjs-logo.svg";

const NavBar: React.FC = () => {
  const { authenticated, loading } = useAuthState();
  const dispath = useAuthDispatch();

  const logout = () => {
    Axios.get("/auth/logout")
      .then(() => {
        dispath("LOGOUT");
        window.location.reload();
      })
      .catch((error) => console.error());
  };

  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-white">
      {/* Logo and title */}
      <div className="flex items-center">
        <Link href="/">
          <a>
            <ReadjsLogo className="w-8 h-8 m-2" />
          </a>
        </Link>
        <span className="text-2xl font-semibold">
          <Link href="/">ReadJS</Link>
        </span>
      </div>

      {/* Search Input */}
      <div className="flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">
        <i className="pl-4 pr-3 text-gray-500 fas fa-search"></i>
        <input
          type="text"
          className="py-1 pr-3 bg-transparent rounded focus:outline-none w-160"
          placeholder="Search"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex">
        {!loading &&
          (authenticated ? (
            <button
              className="w-32 py-1 mr-5 leading-5 blue button"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Fragment>
              <Link href="/login">
                <a className="w-32 py-1 mr-5 leading-5 hollow blue button">
                  Log In
                </a>
              </Link>
              <Link href="/register">
                <a className="w-32 py-1 leading-5 blue button">Sign Up</a>
              </Link>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default NavBar;
