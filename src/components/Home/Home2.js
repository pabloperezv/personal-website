import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Images/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              Hi, I'm <span className="purple">Pablo Perez</span>, a Data Scientist & Engineer from <span className="purple"> Cádiz, Spain.</span>
              <br />
              <br />
              I work at <span className="purple"> Deloitte</span>, where I build data driven solutions to solve complex business challenges.
              <br />
              My background combines <span className="purple"> Aerospace Engineering</span> (University of Seville) with a
               <span className="purple"> Master's degree in Data Science</span>* from the Universitat Oberta de Catalunya (UOC).
              <br />
              <span style={{ fontSize: "12px", fontStyle: "italic" }}>
                * I still need to complete my final master's thesis.
              </span>
              <br />
              <br />
              When I'm not coding, you'll usually find me lifting weights, scuba diving or watching anime.
            </p>
            <i>
              <p style={{ color: "rgb(155 126 172)", fontSize: "19px" }}>
                "Programming isn't about what you know; it's about what you can figure out!"{" "}
              </p>
            </i>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pabloperezverdugo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/pabloperezv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:pablo.perez.tech@gmail.com"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
