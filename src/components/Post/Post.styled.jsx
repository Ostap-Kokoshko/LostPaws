import styled from "styled-components";

export const PostContainer = styled.div`
    background-color: #D9D9D9;
    /* border-radius: 12px; */
    padding: 16px;
    margin: 16px 0;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`;

export const PostHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffa07a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    margin-right: 10px;
`;

export const Username = styled.div`
    font-weight: 600;
    font-size: 16px;
`;

export const Handle = styled.div`
  font-size: 13px;
  color: gray;
`;

export const PostImage = styled.img`
  width: 70%;
  border-radius: 8px;
  margin: 10px 0;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 8px;
  border-top: 1px solid #eee;
  color: #555;
  font-size: 14px;
`;
