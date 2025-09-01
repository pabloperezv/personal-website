import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { 
  SiDbt,
  SiScikitlearn,
  SiPostgresql,
  SiTableau,
  SiPandas,
  SiAmazonec2,
  SiLinux,
  SiStreamlit,
 } from "react-icons/si";
 import { BsRegex, BsTypeH3 } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

import { ReactComponent as CustomLogo } from "../../Assets/Logos/selenium-seeklogo.svg";
import { ReactComponent as CustomLogo1 } from "../../Assets/Logos/scrapylogo.svg";
import { ReactComponent as CustomLogo2 } from "../../Assets/Logos/zytelogo.svg";
import { ReactComponent as CustomLogo3 } from "../../Assets/Logos/GurobiLogo.svg";
import { ReactComponent as CustomLogo4 } from "../../Assets/Logos/amazon-s3-logo.svg";
import { ReactComponent as CustomLogo5 } from "../../Assets/Logos/r-lang.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CustomLogo4 style={{ width: "90px", height: "90px" }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDbt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsTypeH3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CustomLogo1 style={{ width: "90px", height: "90px" }}/>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <CustomLogo style={{ width: "90px", height: "90px" }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CustomLogo2 style={{ width: "90px", height: "90px" }}/>
      </Col>  


      <Col xs={4} md={2} className="tech-icons">
        <TbApi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFileExcel2Fill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CustomLogo5 style={{ width: "90px", height: "90px" }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsRegex />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CustomLogo3 style={{ width: "90px", height: "90px" }}/>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
    </Row>
  );
}

export default Techstack;
