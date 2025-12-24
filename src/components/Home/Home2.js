import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Images/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
            <p className="home-about-body">
              I fell in love with programming and never quite recovered... <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> Python, R and SQL. </b>
              </i>
              <br />
              <br />
              I’m a never-ending learner with a journey that started in &nbsp;
              <i>
                <b className="purple">Aerospace Engineering </b>
              </i>
              and evolved into my current role as a 
              <i>
                <b className="purple"> Data Scientist. </b>
              </i>
              Looking ahead, I aspire to become a 
              <i>
                <b className="purple"> full-stack data professional, </b>
              </i>
              bridging engineering, analytics, and business impact.
              <br />
              <br />
              What excites me most is the opportunity to learn continuously, tackle impactful projects, and transform innovative concepts into 
              <i>
                <b className="purple"> reality.</b>
              </i>
            </p>
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
