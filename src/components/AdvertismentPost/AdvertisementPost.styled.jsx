import styled from "styled-components";

export const PostContainer = styled.div`
  background-color: #d9d9d9;
  padding: 20px;
  border-radius: 16px;
  max-width: 419.36px;
  /* margin: 20px auto; */
  font-family: 'Segoe UI', sans-serif;
  color: #000;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Avatar = styled.div`
  font-size: 32px;
  margin-right: 10px;
`;

export const UserInfo = styled.div`
  flex-grow: 1;
  font-weight: 600;
    font-size: 16px;
`;

export const Username = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const Verified = styled.span`
  color: #000000;
  font-size: 16px;
  margin-left: 4px;
`;

export const Handle = styled.div`
  font-size: 14px;
  color: gray;
`;

export const Status = styled.div`
  font-size: 14px;
  color: green;
  font-weight: bold;
  margin-top: 4px;
`;

export const StatusText = styled.span`
  font-size: 14px;
`;

export const MoreIcon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export const PostImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin: 16px 0;
`;

export const InfoBlock = styled.div`
  font-size: 15px;
  line-height: 1.6;
`;

export const InfoLine = styled.div`
  margin-bottom: 4px;
`;

export const MoreButton = styled.button`
  width: 100%;
  background: white;
  border: 2px solid #0066ff;
  color: #0066ff;
  padding: 10px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 15px;
  color: #333;
`;

export const BottomItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Icon = styled.span`
  font-size: 18px;
`;
