import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Feed from "../../components/Feed/Feed.jsx";
import RightSidebar from "../../components/RightSidebar/RightSidebar.jsx";
import { AppContainer, ContentWrapper, MainContent} from "./Home.styled.jsx";


const HomePage = () => {
    return (
        <AppContainer>
            <Sidebar />
            <ContentWrapper>
                <MainContent>
                    <Feed />
                </MainContent>
            </ContentWrapper>
        </AppContainer>
    );
};

export default HomePage;