import styled from "styled-components";

export const RightSidebarWrapper = styled.div`
  width: 300px;
  background: #D9D9D9;
  padding: 1rem;
  border-left: 1px solid #0000002f;
  overflow-y: auto;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #d9d9d9;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  border: 1px solid #999;
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 0.9rem;
  outline: none;
`;

export const OrgBox = styled.div`
  background: #d9d9d9;
  border: 1px solid #999;
  border-radius: 0.5rem;
  padding: 0.75rem;
`;

export const OrgCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const OrgAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: #fca5a5;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "👤";
    font-size: 1rem;
  }
  margin-right: 0.5rem;
`;

export const OrgName = styled.span`
  flex: 1;
  font-size: 0.9rem;
  color: #374151;
`;

export const OrgCheckIcon = styled.div`
  color: #000;
`;

export const MoreButton = styled.button`
  margin-top: 0.5rem;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
  width: 100%;
  padding: 0.5rem 0;
`;
