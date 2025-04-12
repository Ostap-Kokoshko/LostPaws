import React from "react";
import TopBar from "../TopBar/TopBar.jsx";
import PostInput from "../PostInput/PostInput.jsx";
import Post from "../Post/Post.jsx";
import { FeedWrapper } from "../Feed/Feed.styled.jsx";

const Feed = () => {
    return (
        <FeedWrapper>
            <TopBar />
            <PostInput />
            <Post />
        </FeedWrapper>
    );
};

export default Feed;
