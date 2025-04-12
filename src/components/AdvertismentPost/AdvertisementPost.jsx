import React from "react";
import {
  PostContainer,
  PostHeader,
  Avatar,
  UserInfo,
  Username,
  Handle,
  Status,
  StatusText,
  Verified,
  MoreIcon,
  PostImage,
  InfoBlock,
  InfoLine,
  MoreButton,
  BottomRow,
  BottomItem,
  Icon
} from "./AdvertisementPost.styled";

const AdvertisementPost = () => {
  return (
    <PostContainer>
      <PostHeader>
        <Avatar>🟠</Avatar>
        <UserInfo>
          <Username>
            Патрон Shelter <Verified>✔</Verified>
          </Username>
          <Handle>@pes_duk_offical</Handle>
          <Status>
            <StatusText>95 %</StatusText>
          </Status>
        </UserInfo>
        <MoreIcon>•••</MoreIcon>
      </PostHeader>

      <PostImage src="https://i.imgur.com/ExdKOOz.png" alt="dog" />

      <InfoBlock>
        <InfoLine>Тварина: Пес</InfoLine>
        <InfoLine>Ім’я: Патрон</InfoLine>
        <InfoLine>Вік: 5 років</InfoLine>
        <InfoLine>Локація: Україна, Львів</InfoLine>
      </InfoBlock>

      <MoreButton>Дізнатись більше</MoreButton>

      <BottomRow>
        <BottomItem>
          <Icon>🔖</Icon>
          1234
        </BottomItem>
        <BottomItem>
          <Icon>👁</Icon>
          1234
        </BottomItem>
      </BottomRow>
    </PostContainer>
  );
};

export default AdvertisementPost;
