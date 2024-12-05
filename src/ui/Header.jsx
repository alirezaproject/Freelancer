import React from "react";
import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();

  return <header className="bg-secondary-0 px-8 py-4">App Header</header>;
}

export default Header;
