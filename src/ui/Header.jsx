import React from "react";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

function Header() {
  const { isLoading } = useUser();

  return (
    <header className="border-secondary-200 bg-secondary-0 px-8 py-4">
      <div
        className={`container flex items-center 
          justify-end gap-x-8 xl:max-w-screen-lg 
          ${isLoading && "opacity-50 blur-sm"}`}
      >
        <UserAvatar />
        <HeaderMenu />

      </div>
    </header>
  );
}

export default Header;

