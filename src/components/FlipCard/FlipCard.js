import React from "react";
import Button from "react-bootstrap/Button";
import "./flipCard.css";
import Box from "../Card";

function FlipCard({ icon, heading, child1, child2, child3, child4, child5 }) {
  return (
    <div className="flipCard">
      <div className="flipCardInner">
        <div className="flipCardFront">
          <Box
            icon={icon}
            heading={heading}
            child1={child1}
            child2={child2}
            child3={child3}
            child4={child4}
            child5={child5}
          />
        </div>
        <div className="flipCardBack">
          <div className="cardBackContent">
            <p className="description">Description</p>
            <Button className="demoBtn" variant="light">
              Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;