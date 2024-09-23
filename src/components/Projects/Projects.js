import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
import rainbow from "../../Assets/Projects/rainbow.png";
import WeatherApp from "../../Assets/Projects/WeatherApp.png";
//import suicide from "../../Assets/Projects/suicide.png";
import NetflixClone from "../../Assets/Projects/NetflixClone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={WeatherApp}
                isBlog={false}
                title="Weather App"
                description="An interactive Weather App which displays realtime weather information like current temp, AQI, rainfall, wind speed. "
                ghLink="https://github.com/Shubhamnile11/Weather_App1"
                demoLink="https://weather-app1-kappa-ochre.vercel.app/"
              />
            </Col>
          }

          {
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={NetflixClone}
                isBlog={false}
                title="Netflix-Clone"
                description="A simple landing page clone of Netflix India which is fully responsive across devices."
                ghLink="https://github.com/Shubhamnile11/Netflix_clone.git"
                demoLink="https://netflix-clone-nu-tan-99.vercel.app/"
              />
            </Col>
          }

          {
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={rainbow}
                isBlog={false}
                title="Rainbow Border"
                description="A mini project of Rainbow Border which is a rotating border of vibrant breathing colors made with a single div."
                ghLink="https://github.com/Shubhamnile11/Rainbow_Border.git"
                demoLink="https://rainbow-border.vercel.app/"
              />
            </Col>
          }

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>*/}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>*/}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
