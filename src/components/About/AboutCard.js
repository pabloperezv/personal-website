import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pablo Perez </span>
            from <span className="purple"> Cádiz, Spain.</span>
            <br />
            I am currently employed as a <span className="purple"> Data Scientist</span> at Deloitte.
            <br />
            I hold a bachelor's degree in <span className="purple"> Aerospace Engineering</span> at the University of Seville and a master's degree * in
             <span className="purple"> Data Science</span> at Universitat Oberta de Catalunya (UOC).
            <br />
            <span style={{ fontSize: "12px", fontStyle: "italic" }}>
              * I still need to complete my final master's thesis.
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Lift weights
            </li>
            <li className="about-activity">
              <ImPointRight /> Sea diving
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch anime
            </li>
          </ul>
          <i>
            <p style={{ color: "rgb(155 126 172)", fontSize: "19px" }}>
              "Programming isn't about what you know; it's about what you can figure out!"{" "}
            </p>
            {/* <footer className="blockquote-footer">Pablo</footer> */}
          </i>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
