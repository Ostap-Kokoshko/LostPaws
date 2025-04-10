import React from "react";
import {TopBarWrapper, TabButton} from "./Topbar.styled";

const TopBar = () => {
    return (
        <TopBarWrapper>
            <nav>
                <TabButton active>Новини</TabButton>
                <TabButton>Оголошення</TabButton>
                <TabButton>Блог</TabButton>
                <TabButton>Pet Stories</TabButton>
            </nav>
        </TopBarWrapper>
    );
};

export default TopBar;
