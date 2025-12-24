import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Companies from "./Companies";
import Certifications from "./Certifications";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use everyday
        </h1>
        <Toolstack />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Companies</strong> I worked for
        </h1>
        <Companies />

        <h1 className="project-heading">
          <strong className="purple">Certifications</strong> I hold
        </h1>
        <Certifications />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
