import React from "react";


function Sidebar({ children }) {
  return (
    <nav className="row-span-2 row-start-1 border-l border-gray-200 bg-secondary-0 p-4">
      <ul className="flex flex-col gap-y-4">
        {children}
      </ul>
    </nav>
  );
}

export default Sidebar;
