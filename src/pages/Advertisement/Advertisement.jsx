import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Feed from "../../components/Feed/Feed.jsx";
import Post from "../../components/Post/Post";
import PostInput from "../../components/PostInput/PostInput.jsx";
import TopBar from "../../components/TopBar/TopBar.jsx";
import RightSidebar from "../../components/RightSidebar/RightSidebar.jsx";
import AdvertisementAdd from "../../components/AdvertisementAdd/AdvertisementAdd.jsx"
import AdvertisementPost from "../../components/AdvertismentPost/AdvertisementPost.jsx"
import { AppContainer, ContentWrapper, MainContent, ComponentsWrapper } from "./Advertisement.styled.jsx";
import { Import } from "lucide-react";


const AdvertismentPage = () => {
    return (
        <AppContainer>
            <Sidebar />
            <ContentWrapper>
                <MainContent>
                    <ComponentsWrapper>
                        <TopBar />
                        <AdvertisementAdd />
                        <AdvertisementPost />
                    </ComponentsWrapper>
                </MainContent>
            </ContentWrapper>
            <RightSidebar />
        </AppContainer>
    );
};

export default AdvertismentPage;