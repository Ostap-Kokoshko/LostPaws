import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Feed from "../../components/Feed/Feed.jsx";
import Post from "../../components/Post/Post";
import TopBar from "../../components/TopBar/TopBar.jsx";
import RightSidebar from "../../components/RightSidebar/RightSidebar.jsx";
import { AppContainer, ContentWrapper, MainContent, WtfWrapper, Button, PlusIcon, ButtonContent} from "./Advertisement.styled.jsx";


const AdvertismentPage = () => {
    return (
        <AppContainer>
            <Sidebar />
            <ContentWrapper>
                <MainContent>
                    <WtfWrapper>
                        <TopBar/>
                        <Button>
                            <PlusIcon>+</PlusIcon>
                            Створити нове оголошення
                        </Button>
                        <Post/>
                    </WtfWrapper>
                </MainContent>
            </ContentWrapper>
        </AppContainer>
    );
};

export default AdvertismentPage;