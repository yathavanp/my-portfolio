import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #2d4059;
`;

export const FooterWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.div`
  width: 100%;
`;

export const SMWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
`;
export const SLogo = styled(Link)`
  color: #fff;
  font-family: "DM Serif Display";
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover {
    color: #fff;
    text-decoration: none;
    border-bottom: 4px solid #ffb400;
  }
`;

export const Copyright = styled.small`
  font-family: "Poppins";
  color: #fff;
  margin-bottom: 16px;
`;

export const SIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
`;
export const SILink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #fff;
    text-decoration: none;
    border-bottom: 4px solid #ffb400;
  }
`;
