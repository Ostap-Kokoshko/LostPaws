import React from "react";
import { RightSidebarWrapper, OrgCard, OrgName } from "./RightSidebar.styled";

const RightSidebar = () => {
    return (
        <RightSidebarWrapper>
            <h3 className="font-semibold mb-4">Популярні організації</h3>
            {[1, 2, 3, 4].map((id) => (
                <OrgCard key={id}>
                    <div className="w-8 h-8 bg-orange-300 rounded-full" />
                    <OrgName>Dog lovers</OrgName>
                </OrgCard>
            ))}
            <p className="text-blue-500 mt-2 cursor-pointer">Більше</p>
        </RightSidebarWrapper>
    );
};

export default RightSidebar;
