import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  SocialMedia,
  SMWrap,
  SLogo,
  Copyright,
  SIcons,
  SILink,
} from "./css/footer";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SMWrap>
            <SLogo to="/" onClick={toggleHome}>
              Yp
            </SLogo>
            <Copyright>
              {" "}
              Yathavan Pushpanathan © {new Date().getFullYear()}{" "}
            </Copyright>
            <SIcons>
              <SILink
                href="https://www.facebook.com/pushyathavan/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SILink>
              <SILink
                href="https://www.instagram.com/yathavanp/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SILink>
              <SILink
                href="https://www.linkedin.com/in/yathavanp/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SILink>
              <SILink
                href="https://github.com/yathavanp"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </SILink>
            </SIcons>
          </SMWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
