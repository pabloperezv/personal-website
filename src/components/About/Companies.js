import React from "react";
import { Col, Row } from "react-bootstrap";
import Deloittelogo from "../../Assets/Logos/Deloitte_logo.svg";
import Accenturelogo from "../../Assets/Logos/Accenture_logo.svg";
import Airbuslogo from "../../Assets/Logos/Airbus_logo.png";
import Atexislogo from "../../Assets/Logos/Atexis_logo.png";

function Companies() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="company-icons">
        <img src={Deloittelogo} alt="Deloitte" style={{ width: "170px", height: "auto" }}/>
      </Col>
      <Col xs={4} md={2} className="company-icons">
        <img src={Accenturelogo} alt="Accenture" style={{ width: "170px", height: "auto", marginTop: "-20px" }}/>
      </Col>
      <Col xs={4} md={2} className="company-icons">
        <img src={Airbuslogo} alt="Airbus" style={{ width: "170px", height: "auto" }}/>
      </Col>
      <Col xs={4} md={2} className="company-icons">
        <img src={Atexislogo} alt="Atexis" style={{ width: "170px", height: "auto" }}/>
      </Col>
    </Row>
  );
}

export default Companies;
