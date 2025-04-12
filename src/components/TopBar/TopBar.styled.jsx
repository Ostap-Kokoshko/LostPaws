import styled from "styled-components";

export const TopBarWrapper = styled.div`
    background-color: #D9D9D9;
    padding: 10px 30px;
    display: flex;
    gap: 30px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 0;
    z-index: 5;
`;

export const TabButton = styled.button`
  margin-right: 1rem;
  font-weight: 500;
  border-bottom: ${(props) => (props.active ? "2px solid black" : "none")};
  color: #374151;
  background: none;
  padding: 0.25rem 0;
  cursor: pointer;
`;