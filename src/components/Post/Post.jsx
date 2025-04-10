import React from "react";
import {
    PostContainer,
    PostHeader,
    Avatar,
    Username,
    Handle,
    PostImage,
    PostFooter,
} from "./Post.styled";

const Post = () => {
    return (
        <PostContainer>
            <PostHeader>
                <Avatar>🟠</Avatar>
                <div>
                    <Username>Пес Патрон ✔</Username>
                    <Handle>@pes_duk_offical</Handle>
                </div>
            </PostHeader>
            <PostImage src="https://i.imgur.com/ExdKOOz.png" alt="post" />
            <PostFooter>
                <div>❤️ 1234</div>
                <div>💬 1234</div>
                <div>🔁 1234</div>
                <div>👁 1234</div>
            </PostFooter>
        </PostContainer>
    );
};

export default Post;
