import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #D9D9D9;
    padding: 20px 16px;
    /* border-radius: 12px; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    border-bottom: 1px solid #0000002f;
    border-top: 1px solid #0000002f;
    margin-bottom: 16px;
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    font-size: 18px;
`;

export const Input = styled.input`
    flex: 1;
    border: 1px solid #999;
    border-radius: 10px;
    outline: none;
    font-size: 14px;
    background: none;
    margin: 10px;
    padding: 10px;
`;

export const Button = styled.button`
  background-color: #D9D9D9;
  color: #000000;
  border: 1px solid #007aff;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;
