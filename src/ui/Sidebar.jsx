import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="row-span-2 row-start-1 border-l border-gray-200 bg-secondary-0 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavlink to="/owner/dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavlink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;

function CustomNavlink({ children, to }) {
  const navlinkClass =
    "flex items-center gap-x-2 rounded-lg px-2 py-1.5 transition-all duration-300 hover:bg-primary-100/50 hover:text-primary-900";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? ` ${navlinkClass} bg-primary-100/50 text-primary-900`
          : `${navlinkClass} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
