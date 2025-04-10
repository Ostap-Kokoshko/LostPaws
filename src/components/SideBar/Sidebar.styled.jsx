import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
  width: 23rem;
  background-color: #f3f4f6;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #d1d5db;
  border-radius: 9999px;
  margin: 0 auto 0.5rem;
`;

export const MenuItem = ({ to, icon, label }) => (
    <StyledLink to={to}>
        {icon}
        {label}
    </StyledLink>
);

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  color: #374151;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: #1f2937;
  }
`;