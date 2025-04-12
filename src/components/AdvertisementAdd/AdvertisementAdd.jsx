import React from "react";
import { InputContainer, PlusIcon, Button } from "./AdvertisementAdd.styled";

const AdvertisementAdd = () => {
    return (
        <InputContainer>
            <Button>
                <PlusIcon>+</PlusIcon>
                Створити нове оголошення
            </Button>
        </InputContainer>
    );
};

export default AdvertisementAdd;
