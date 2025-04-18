import React from "react";
import { Home, Users, Bell, Mail } from "lucide-react";
import { SidebarWrapper, Avatar, MenuItem } from "./Sidebar.styled";

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <div className="mb-6 text-center">
                <Avatar />
                <h2 className="font-bold">Test User</h2>
                <p className="text-sm text-gray-600">Переглянути профіль</p>
            </div>
            <nav className="flex flex-col gap-4">
                <MenuItem to="/" icon={<Home />} label="Головна" />
                <MenuItem to="/" icon={<Users />} label="Організації" />
                <MenuItem to="/" icon={<Bell />} label="Сповіщення" />
                <MenuItem to="/" icon={<Mail />} label="Повідомлення" />
            </nav>
        </SidebarWrapper>
    );
};

export default Sidebar;