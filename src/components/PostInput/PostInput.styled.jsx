import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px 16px;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    border: none;
    outline: none;
    font-size: 14px;
    background: none;
`;

export const Button = styled.button`
  background-color: #e5f1ff;
  color: #007aff;
  border: 1px solid #007aff;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;
