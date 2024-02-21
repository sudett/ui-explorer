import { Space } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled(Space)`
  width: 100%;
  justify-content: space-between;
  background-color: var(--gray-bg-color);
  border: 1px solid var(--gray-border-color);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const LinkContainer = styled(Link)`
  color: var(--text-white);
`;
