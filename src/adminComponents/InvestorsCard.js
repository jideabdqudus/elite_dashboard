import React from "react";
import { Modal, Row, Col, Badge } from "antd";

const InvestorsCard = () => {
  return (
    <div>
      <Row key={"plan._id"}>
        <Col span={4} className="cardCol">
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "20px",
              margin: "0px",
            }}
          >
            {"Sodeeq Ajadi"}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{"Name"}</p>
        </Col>
        <Col span={4} className="cardCol">
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "20px",
              margin: "0px",
            }}
          >
            {"080129291192"}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{"Phone"}</p>
        </Col>
        <Col span={4} className="cardCol">
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "20px",
              margin: "0px",
            }}
          >
            {"jdoas@gmail.com"}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{"Email"}</p>
        </Col>
        <Col span={4} className="cardCol">
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "10px",
              margin: "0px",
            }}
          >
            {"Fixed Deposit, Halal Trust"}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{"Investments"}</p>
        </Col>
        <Col span={4} className="cardCol">
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "10px",
              margin: "0px",
            }}
          >
            {"-"}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{"Withdrawals"}</p>
        </Col>
      </Row>
      <Row key={"plan._id"}>
        <Col span={4} className="cardCol">
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "20px",
              margin: "0px",
            }}
          >
            {"Aremu Aisha"}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{"Name"}</p>
        </Col>
        <Col span={4} className="cardCol">
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "20px",
              margin: "0px",
            }}
          >
            {"070122198"}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{"Phone"}</p>
        </Col>
        <Col span={4} className="cardCol">
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "20px",
              margin: "0px",
            }}
          >
            {"aishas@gmail.com"}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{"Email"}</p>
        </Col>
        <Col span={4} className="cardCol">
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "10px",
              margin: "0px",
            }}
          >
            {"-"}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{"Investments"}</p>
        </Col>
        <Col span={4} className="cardCol">
          <p
            style={{
              color: "#0a2e65",
              fontWeight: "700",
              fontSize: "10px",
              margin: "0px",
            }}
          >
            {"-"}
          </p>
          <p style={{ color: "gray", fontWeight: "normal" }}>{"Withdrawals"}</p>
        </Col>
      </Row>
    </div>
  );
};

export default InvestorsCard;
