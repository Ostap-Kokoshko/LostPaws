import React from "react";
import {
    RightSidebarWrapper,
    SearchWrapper,
    SearchInput,
    OrgBox,
    OrgCard,
    OrgAvatar,
    OrgName,
    OrgCheckIcon,
    MoreButton
} from "./RightSidebar.styled";
import { Search, CheckCheck } from "lucide-react";

const RightSidebar = () => {
    const organizations = [
        "Korean Dog lovers",
        "Korean Dog lovers",
        "Korean Dog lovers",
        "Korean Dog lovers",
    ];

    return (
        <RightSidebarWrapper>
            <SearchWrapper>
                <SearchInput type="text" placeholder="Пошук" />
                <Search size={16} />
            </SearchWrapper>

            <OrgBox>
                <h3 className="font-semibold mb-2">Популярні організації</h3>
                {organizations.map((org, index) => (
                    <OrgCard key={index}>
                        <OrgAvatar />
                        <OrgName>{org}</OrgName>
                        <OrgCheckIcon>
                            <CheckCheck size={16} />
                        </OrgCheckIcon>
                    </OrgCard>
                ))}
                <MoreButton>Більше</MoreButton>
            </OrgBox>
        </RightSidebarWrapper>
    );
};

export default RightSidebar;
