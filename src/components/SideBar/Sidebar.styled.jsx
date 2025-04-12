import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
  width: 240px;
  background-color: #D9D9D9;
  padding: 1rem;
  border-right: 1px solid #0000002f;
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  margin: 0 auto 1rem;
  display: block;
`;

export const Avatar = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #e0bf03;
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
