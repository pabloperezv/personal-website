import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import awsSolutionsArchitect from "../../Assets/Certifications/aws_solutionsarchitect.png";
import dbtFundamentals from "../../Assets/Certifications/dbt_fundamentals.png";
import snowCollaboration from "../../Assets/Certifications/snow_collaboration.png";
import snowCore from "../../Assets/Certifications/snow_core.png";
import snowDataApplications from "../../Assets/Certifications/snow_dataapplications.png";
import snowDataEngineer from "../../Assets/Certifications/snow_dataengineer.png";
import snowDataLake from "../../Assets/Certifications/snow_datalake.png";
import snowDataScience from "../../Assets/Certifications/snow_datascience.png";
import snowDataWarehouse from "../../Assets/Certifications/snow_datawarehouse.png";

const certifications = [
  { image: awsSolutionsArchitect, name: "AWS Solutions Architect" },
  { image: dbtFundamentals, name: "dbt Fundamentals" },
  { image: snowCore, name: "Snowflake Core" },
  { image: snowCollaboration, name: "Snowflake Collaboration" },
  { image: snowDataApplications, name: "Snowflake Data Applications" },
  { image: snowDataEngineer, name: "Snowflake Data Engineer" },
  { image: snowDataLake, name: "Snowflake Data Lake" },
  { image: snowDataScience, name: "Snowflake Data Science" },
  { image: snowDataWarehouse, name: "Snowflake Data Warehouse" },
];

function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(certifications.length); // Start in the middle (duplicated section)
  const scrollRef = useRef(null);
  const viewportRef = useRef(null);
  const isTransitioning = useRef(false);

  // Duplicate certifications for infinite loop
  const duplicatedCertifications = [...certifications, ...certifications, ...certifications];

  // Initialize position on mount
  useEffect(() => {
    if (scrollRef.current && viewportRef.current) {
      const viewport = viewportRef.current;
      const viewportWidth = viewport.offsetWidth;
      const itemsPerView = 6;
      const gap = 30;
      const totalGaps = (itemsPerView - 1) * gap;
      const itemWidth = (viewportWidth - totalGaps) / itemsPerView;
      const initialPosition = -certifications.length * (itemWidth + gap);
      
      scrollRef.current.style.transition = 'none';
      scrollRef.current.style.transform = `translateX(${initialPosition}px)`;
      
      // Enable transition after initial positioning
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.style.transition = 'transform 0.5s ease';
        }
      }, 50);
    }
  }, []);

  const scrollToIndex = (index, instant = false) => {
    if (!scrollRef.current || !viewportRef.current || isTransitioning.current) return;
    
    const viewport = viewportRef.current;
    const viewportWidth = viewport.offsetWidth;
    const itemsPerView = 6;
    const gap = 30;
    
    // Calculate item width based on viewport
    const totalGaps = (itemsPerView - 1) * gap;
    const itemWidth = (viewportWidth - totalGaps) / itemsPerView;
    
    // Calculate scroll position to show the selected item
    const newPosition = -index * (itemWidth + gap);
    
    if (instant) {
      scrollRef.current.style.transition = 'none';
    } else {
      scrollRef.current.style.transition = 'transform 0.5s ease';
    }
    
    scrollRef.current.style.transform = `translateX(${newPosition}px)`;
    setCurrentIndex(index);
    
    // Handle seamless loop
    if (!instant) {
      isTransitioning.current = true;
      setTimeout(() => {
        isTransitioning.current = false;
        
        // If we're at the end of the first set, jump to the middle set
        if (index >= certifications.length * 2) {
          const newIndex = index - certifications.length;
          scrollToIndex(newIndex, true);
        }
        // If we're at the beginning of the first set, jump to the middle set
        else if (index < certifications.length) {
          const newIndex = index + certifications.length;
          scrollToIndex(newIndex, true);
        }
      }, 500);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    scrollToIndex(newIndex);
  };

  return (
    <Container fluid style={{ paddingBottom: "50px" }}>
      <div className="certifications-static-container">
        <button 
          className="certification-arrow certification-arrow-left"
          onClick={handlePrev}
          aria-label="Previous certifications"
        >
          <FaChevronLeft />
        </button>
        
        <div ref={viewportRef} className="certifications-viewport">
          <div
            ref={scrollRef}
            className="certifications-scroll-static"
          >
            {duplicatedCertifications.map((cert, index) => (
              <div 
                key={index} 
                className="certification-badge"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="certification-image"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="certification-arrow certification-arrow-right"
          onClick={handleNext}
          aria-label="Next certifications"
        >
          <FaChevronRight />
        </button>
      </div>
    </Container>
  );
}

export default Certifications;

