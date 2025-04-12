import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #D9D9D9;
    /* padding: 20px 16px; */
    /* border-radius: 12px; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    border-bottom: 1px solid #0000002f;
    border-top: 1px solid #0000002f;
    margin-bottom: 16px;
    width: 419.36px;
`;

export const Button = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px 20px;
   background-color: #d9d9d9;
   color: #000000; /* Початковий колір тексту */
   /* border: 2px solid #ffffff30; Додано обвідку з кольором тексту */
   /* border-radius: 5px; */
   cursor: pointer;
   font-size: 16px;
   transition: all 0.3s ease; /* Плавний перехід для ефектів */

 `;

export const PlusIcon = styled.span`
   margin-right: 10px;
   font-size: 40px;
   display: flex;
   align-items: center;
   padding-bottom: 9px;
 `;