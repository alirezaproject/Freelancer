import React from "react";
import { HiOutlineUser } from "react-icons/hi";

import DarkModetoggle from "./DarkModetoggle";
import LogOut from "../features/authentication/LogOut";
import { useNavigate } from "react-router-dom";

function HeaderMenu() {
    const navigate = useNavigate();
    return <ul className="flex gap-x-4 items-center">
        <li >
            <button onClick={() => navigate("dashboard")}><HiOutlineUser className="w-5 h-5 text-primary-900" /></button>
        </li>
        <li >
            <DarkModetoggle />
        </li>
        <li >
            <LogOut />
        </li>
    </ul>;
}

export default HeaderMenu;
