import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPython,
  SiSnowflake,
  SiGithub,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

const tools = [
  { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
  { icon: <SiPython />, name: "Python" },
  { icon: <TbSql />, name: "SQL" },
  { icon: <SiSnowflake />, name: "Snowflake" },
  { icon: <SiGithub />, name: "GitHub" },
];

function Toolstack() {
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
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="flip-card-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front tech-icons">
                {tool.icon}
              </div>
              <div className="flip-card-back tech-icons">
                <div 
                  className="tool-name" 
                  ref={(el) => (toolNameRefs.current[index] = el)}
                >
                  {tool.name}
                </div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
