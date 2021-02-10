import styled from "styled-components";

export const ProjectsContainer = styled.div`
  color: #2d4059;
  min-height: 100vh;
  height: 100%;
  padding: 100px 0;
  background: #2d4059;
`;

export const ContentContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  text-align: center;
  


  @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
}
`;

export const Title = styled.h1`
  font-family: "DM Serif Display";
  margin-bottom: 80px;
  font-size: 55px;
  line-height: 1.1;
  color: #ffffff;
`;

export const ProjectWrap = styled.div`
  margin: 0px auto;
`;

export const ProjectRow = styled.div`
  display: flex;
  margin: 0 -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;
export const ProjectCol = styled.div`
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 1296px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImageLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const ImageCover = styled.div`
  max-width: 1505px;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1296px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: 0 0;
  width: 600px;
  height: 400px;
`;

export const TextWrap = styled.div`
  max-width: 700px;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: left;



  @media screen and (max-width: 768px){

        padding-bottom: 65px;
    }
}
`;

export const ProjectName = styled.h1`
  font-family: "Poppins";
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  color: #f6f6f6;
`;

export const ProjectDesc = styled.p`
  font-family: "Poppins";
  max-width: 650px;
  margin-bottom: 35px;
  font-size: 28px;
  line-height: 38px;
  color: #ea5455;
`;
