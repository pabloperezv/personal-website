import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Images/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

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
              Hi Everyone, I am <span className="purple">Pablo Perez </span>
              from <span className="purple"> Cádiz, Spain.</span>
              <br />
              I am currently employed as a <span className="purple"> Data Scientist</span> at Deloitte.
              <br />
              I hold a bachelor's degree in <span className="purple"> Aerospace Engineering</span> at the University of Seville and a master's degree * in
               <span className="purple"> Data Science</span> at Universitat Oberta de Catalunya (UOC).
              <br />
              <span style={{ fontSize: "12px", fontStyle: "italic" }}>
                * I still need to complete my final master's thesis.
              </span>
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Lift weights
              </li>
              <li className="about-activity">
                <ImPointRight /> Sea diving
              </li>
              <li className="about-activity">
                <ImPointRight /> Watch anime
              </li>
            </ul>
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

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
