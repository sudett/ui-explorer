import { HeaderContainer, NavContainer, LinkContainer } from "./Header.styled";
import Logo from "../../assets/img/Logo";

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <NavContainer>
        <LinkContainer to="/">Documents</LinkContainer>
        <LinkContainer to="/">Github</LinkContainer>
        <LinkContainer to="/">Blog</LinkContainer>
        <LinkContainer to="/analytics">Analytics</LinkContainer>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
