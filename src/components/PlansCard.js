import React from "react";
import { Row, Col, Card, Badge } from "antd";
import PlanForm from "./PlanForm";

const PlansCard = () => {
  return (
    <div>
      <Row>
        <Col span={9} className="dashMaturityCard">
          <Badge.Ribbon text="REGULAR PLAN MATURITY" title="Amazing Deals">
            <Card
              className="cardHero"
              style={{ backgroundColor: "#e1f6ff", margin: 0 }}
            >
              <p style={{ fontSize: "15px", fontWeight: "500" }}>
                New House Purchase
              </p>
              <h2
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "600",
                  color: "#0a2e65",
                }}
              >
                <sup
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    top: "-1em",
                    marginRight: "4px",
                  }}
                >
                  ₦
                </sup>
                247,900
                <sub
                  style={{
                    bottom: ".02em",
                    marginLeft: "4px",
                    fontWeight: "700",
                    opacity: ".6",
                    fontSize: ".3em",
                  }}
                >
                  .00
                </sub>
              </h2>
              <hr />
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
      <h1
        style={{
          color: "rgba(10,46,101)",
          opacity: ".3",
          marginTop: "50px",
          fontSize: "40px",
          fontWeight: "600",
        }}
      >
        Add new Plan
      </h1>
      <div>
        <PlanForm />
      </div>
    </div>
  );
};


export default (PlansCard);
