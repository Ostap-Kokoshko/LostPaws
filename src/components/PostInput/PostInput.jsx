import React from "react";
import { InputContainer, Avatar, Input, Button } from "./PostInput.styled";

const PostInput = () => {
    return (
        <InputContainer>
            <Avatar>👤</Avatar>
            <Input placeholder="Створіть новий допис" />
            <Button>Опублікувати</Button>
        </InputContainer>
    );
};

export default PostInput;
