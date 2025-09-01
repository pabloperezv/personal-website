import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import website from "../../Assets/Projects/website.png";
import jobsnewsletter from "../../Assets/Projects/jobsnewsletter.png";
import scrapersx3 from "../../Assets/Projects/scrapersx3.png";
import s3migration from "../../Assets/Projects/s3migration.png";
import storeclustering from "../../Assets/Projects/storeclustering.png";
import vrp from "../../Assets/Projects/vrp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s3migration}
              isBlog={false}
              title="S3 to Snowflake migration"
              description="Migrated large and heterogeneous datasets from AWS S3 to Snowflake. Handling JSON, Parquet, CSV, Shapefiles and adding per-file retry logic for failures. Also simplified shapefiles to comply with Snowflake GEOGRAPHY size constraints (64 MB)."
              // demoLink="https://.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobsnewsletter}
              isBlog={false}
              title="Jobs Newsletter"
              description="Built a LinkedIn job scraper that collects all data-related postings from the last 24 hours, filters for relevance, and emails the top picks to me. Deployed on AWS EC2 with a daily cron so it runs even when my PC is off."
              ghLink="https://github.com/pabloperezv/jobs-newsletter"
              // demoLink="https://.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrp}
              isBlog={false}
              title="Vehicle Routing Problem"
              description="Optimized large-scale and complex Capacitated Vehicle Routing Problem with Time Windows (CVRPTW) to plan routes for hundreds of sales representatives in 20+ countries achieving multimillion-dollar cost savings and significant CO₂ emission cuts."
              // demoLink="https://.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrapersx3}
              isBlog={false}
              title="Multiple Scrapers"
              description="I build scrapers the way some people collect sneakers. My bots have visited more places than I have: Google Maps, Gaode Maps, Glassdoor, Linkedin, and beyond."
              ghLink="https://github.com/pabloperezv/glassdoor-scraper"
              // demoLink="https://.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storeclustering}
              isBlog={false}
              title="Stores Clustering"
              description="Built ML models to score each store’s sales potential and fed them into territory planning. For this we need to balance workloads, visit frequencies, take into account salesmen personal constraints and cut travel time. I used Gurobi for the optimization part and k-means constrained for the clustering."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="Personal Website"
              description="Even though I'm a data scientist I also wanted to know what it feels like to be a frontend developer that's why I decided to challenge myself and see if I could actually ship a real site. I ended up using HTML, CSS, JavaScript, and React. The result is the current page you are visiting :)"
              ghLink="https://github.com/pabloperezv/personal-website"
            />
          </Col>
        </Row>
        <small
          className="text-muted d-block text-center mt-4"
          style={{ opacity: 0.85 }}
        >
          Note: Not all projects have GitHub links, many are enterprise/private.
        </small>
      </Container>
    </Container>
  );
}

export default Projects;
