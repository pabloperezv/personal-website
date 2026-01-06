import React, { useEffect, useRef } from "react";
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
  // SiPandas,
  SiAmazonec2,
  SiLinux,
  SiStreamlit,
  SiDocker,
  SiKubernetes,
  SiAmazons3,
  SiSelenium,
  SiZyte,
 } from "react-icons/si";
 import { BsTypeH3 } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

import { ReactComponent as CustomLogo1 } from "../../Assets/Logos/GurobiLogo.svg";
import { ReactComponent as CustomLogo2 } from "../../Assets/Logos/r-lang.svg";
import { ReactComponent as CustomLogo3 } from "../../Assets/Logos/Scrapy_logo.svg";

const techStack = [
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiAmazons3 />, name: "Amazon S3" },
  { icon: <SiAmazonec2 />, name: "Amazon EC2" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiDbt />, name: "dbt" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiScikitlearn />, name: "Scikit-learn" },
  // { icon: <SiPandas />, name: "Pandas" },
  { icon: <SiStreamlit />, name: "Streamlit" },
  { icon: <BsTypeH3 />, name: "H3" },
  { icon: <SiLinux />, name: "Linux" },
  { icon: <CustomLogo3 style={{ width: "90px", height: "90px" }} />, name: "Scrapy" },
  { icon: <SiSelenium />, name: "Selenium" },
  { icon: <SiZyte />, name: "Zyte" },
  { icon: <TbApi />, name: "API" },
  { icon: <RiFileExcel2Fill />, name: "Excel" },
  { icon: <CustomLogo2 style={{ width: "90px", height: "90px" }}/>, name: "R" },
  { icon: <SiTableau />, name: "Tableau" },
  { icon: <CustomLogo1 style={{ width: "90px", height: "90px" }}/>, name: "Gurobi" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiHtml5 />, name: "HTML5" },
  { icon: <DiCss3 />, name: "CSS3" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
];

function Techstack() {
  const toolNameRefs = useRef([]);

  useEffect(() => {
    const adjustFontSize = (element) => {
      if (!element) return;
      
      const container = element.parentElement;
      if (!container || container.offsetWidth === 0) return;
      
      const maxWidth = container.offsetWidth - 20; // Account for padding
      const maxHeight = container.offsetHeight - 20;
      
      // Reset to initial size
      element.style.fontSize = '';
      let fontSize = parseFloat(window.getComputedStyle(element).fontSize);
      
      // Check if text fits and reduce if needed
      while (
        (element.scrollWidth > maxWidth || element.scrollHeight > maxHeight) &&
        fontSize > 8
      ) {
        fontSize -= 0.5;
        element.style.fontSize = `${fontSize}px`;
      }
    };

    // Use setTimeout to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      toolNameRefs.current.forEach(adjustFontSize);
    }, 100);
    
    // Adjust on window resize
    const handleResize = () => {
      setTimeout(() => {
        toolNameRefs.current.forEach(adjustFontSize);
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="flip-card-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front tech-icons">
                {tech.icon}
              </div>
              <div className="flip-card-back tech-icons">
                <div 
                  className="tool-name" 
                  ref={(el) => (toolNameRefs.current[index] = el)}
                >
                  {tech.name}
                </div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
