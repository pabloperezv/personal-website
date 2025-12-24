import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,          // optional
  demoLink,        // optional
  isBlog,          // reuses ghLink as blog URL if isBlog === true
  showGithub = true, // optional toggle (default on)
}) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>{description}</Card.Text>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, flexWrap: "wrap", width: "100%" }}>

          {/* GitHub / Blog button: optional */}
          {showGithub && ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* Demo button: keep your existing condition */}
          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
