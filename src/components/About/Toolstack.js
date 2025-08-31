import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPython,
  SiSnowflake,
  SiGithub,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnowflake />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>      
    </Row>
  );
}

export default Toolstack;
