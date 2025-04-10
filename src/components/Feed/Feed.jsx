import React from "react";
import { FeedWrapper } from "./Feed.styled";
import PostInput from "../PostInput/PostInput";
import Post from "../Post/Post";
import TopBar from "../../components/TopBar/TopBar.jsx";

const Feed = () => {
    return (
        <FeedWrapper>
            <TopBar />
            <PostInput />
            <Post />
            <Post />
        </FeedWrapper>
    );
};

export default Feed;
