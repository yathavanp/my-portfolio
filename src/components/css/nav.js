import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  font-family: "Poppins";
  background: #2d4059;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: top 0.8s;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 35px;
`;

export const NavLogo = styled(LinkRoute)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-family: "DM Serif Display";
  font-weight: 700;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #ffb400;
    text-decoration: none;
  }
`;

export const MobIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    margin-top: -7px;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #fff;
    text-decoration: none;
    border-bottom: 4px solid #ffb400;
  }

  &.active {
    border-bottom: 4px solid #ea5455;
  }
`;

export const NavBtnLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;
