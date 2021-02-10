import React from "react";
import { Button } from "react-bootstrap";
import Pdf from "../Resume/resume.pdf";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SidebarRoute,
} from "./css/sidebar";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
          <SidebarRoute href={Pdf} target="_blank" onClick={toggle}>
            <Button
              variant="btn btn-outline-light btn-lg hero-btn-alt"
              className="linkFont"
            >
              Resume
            </Button>
          </SidebarRoute>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
