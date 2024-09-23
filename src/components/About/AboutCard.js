import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Nile </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I have Completed my Graduation (BE) from Savitribai Phule
            University.
            <br />
            Additionally, I have achieved certification from Infosys Springboard
            as Java Fundamentals.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating Content
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shubham Nile</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
