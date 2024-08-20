import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Bio } from "../utils/data/constants";
import { MenuRounded } from "@mui/icons-material";

const Navbar = () => {
  const Nav = styled.div`
    background-color: ${({ theme }) => theme.bg};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    color: white;
  `;
  const NavbarContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: space-betweenc;
    align-items: center;
    font-size: 1rem;
  `;
  const NavbarLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 18px;
  `;

  const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    @media screen and (max-width: 786px) {
      display: none;
    }
  `;

  const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  `;

  const ButtonContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 786px) {
      display: none;
    }
  `;
  const GithubButton = styled.a`
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.text_primary};
    }
  `;
  const MobileIcon = styled.div`
    color: ${({ theme }) => theme.text_primary};
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 786px) {
      display: block;
    }
  `;

  const MobileMenu = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: start;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    position: absolute;
    top: 80px;
    right: 0;
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  `;

  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">Shivam</NavbarLogo>
        <MobileIcon onClick={() => setMenuOpen(!menuOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        {menuOpen ? (
          <MobileMenu isOpen={menuOpen}>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} href="#Education">
              Education
            </NavLink>
            <GithubButton
              target="_blank"
              href={Bio.github}
              style={{ color: theme.text_primary, background: theme.primary }}
            >
              Github
            </GithubButton>
          </MobileMenu>
        ) : null}
        <ButtonContainer>
          <GithubButton target="_blank" href={Bio.github}>
            Github
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
