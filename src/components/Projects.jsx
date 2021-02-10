import React from "react";
import {
  ProjectsContainer,
  ContentContainer,
  Title,
  ProjectWrap,
  ProjectRow,
  ProjectCol,
  ImageLink,
  ImageCover,
  Image,
  TextWrap,
  ProjectName,
  ProjectDesc,
} from "./css/projects";

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <ContentContainer>
          <Title>Projects</Title>
          <ProjectWrap>
            <ProjectRow>
              <ProjectCol>
                <TextWrap>
                  <ProjectName>Foodbook</ProjectName>
                  <ProjectDesc>
                    Foodbook like facebook, is a social media application where
                    food enthusiasts of every background can unite! Here, you
                    can read and share your own recipes as well as tips and
                    tricks used in the kictchen, amongst eachother
                  </ProjectDesc>
                </TextWrap>
              </ProjectCol>
              <ProjectCol>
                <ImageLink>
                  <ImageCover>
                    <Image src={require("../images/foodbook.png")} />
                  </ImageCover>
                </ImageLink>
              </ProjectCol>
            </ProjectRow>
          </ProjectWrap>
        </ContentContainer>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

// <div className="card-deck">
//   <div className="card">
//     <img
//       className="card-img-top"
//       src={require("../images/foodbook.png")}
//       alt="Card image cap"
//     />
//     <div className="card-body">
//       <h5 className="card-title">Foodbook</h5>
//       <p className="card-text">
//         Some quick example text to build on the card title and make up
//         the bulk of the card's content.
//       </p>
//       <a href="/" className="btn btn-primary">
//         Go somewhere
//       </a>
//     </div>
//   </div>
//   <div className="card">
//     <img
//       className="card-img-top"
//       src={require("../images/todo.png")}
//       alt="Card image cap"
//     />
//     <div className="card-body">
//       <h5 className="card-title">To-do List</h5>
//       <p className="card-text">
//         Some quick example text to build on the card title and make up
//         the bulk of the card's content.
//       </p>
//       <a href="/" className="btn btn-primary">
//         Go somewhere
//       </a>
//     </div>
//   </div>
//   <div className="card">
//     <img
//       className="card-img-top"
//       src={require("../images/soml.png")}
//       alt="Card image cap"
//     />
//     <div className="card-body">
//       <h5 className="card-title">Story of My Life</h5>
//       <p className="card-text">
//         Some quick example text to build on the card title and make up
//         the bulk of the card's content.
//       </p>
//       <a href="/" className="btn btn-primary">
//         Go somewhere
//       </a>
//     </div>
//   </div>
//   <div className="card">
//     <img
//       className="card-img-top"
//       src={require("../images/stick.png")}
//       alt="Card image cap"
//     />
//     <div className="card-body">
//       <h5 className="card-title">Stick</h5>
//       <p className="card-text">
//         Some quick example text to build on the card title and make up
//         the bulk of the card's content.
//       </p>
//       <a href="/" className="btn btn-primary">
//         Go somewhere
//       </a>
//     </div>
//   </div>
// </div>
