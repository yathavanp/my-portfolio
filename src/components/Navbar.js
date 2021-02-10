import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import Pdf from "../Resume/resume.pdf";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
} from "./css/nav";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav id="navbar">
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Yp
          </NavLogo>
          <MobIcon onClick={toggle}>
            <BiMenuAltRight />
          </MobIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavBtnLink href={Pdf} target="_blank">
                <Button variant="outline-light" className="linkFont">
                  Resume
                </Button>
              </NavBtnLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
