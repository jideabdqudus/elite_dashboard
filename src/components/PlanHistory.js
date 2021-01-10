import React, { useState, Fragment } from "react";
import { Modal, Row, Col, Badge } from "antd";
import { CheckCircleTwoTone, DeleteOutlined } from "@ant-design/icons";
import SavingsImg from "../assets/savingstime.svg";
import mastercard from "../assets/mastercard.svg";

const PlanHistory = () => {
  const [visible, setVisible] = useState(false);

  // const showModal = () => {
  //   setVisible(true);
  // };

  const handleOk = (e) => {
    setVisible(true);
  };

  const onDelete = () => {
    console.log("Deleted");
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <Fragment>
        <div>
        
          <Row key={"plan._id"}>
            <Col span={2} key={"plan._id"}>
              <img src={SavingsImg} alt="Savings" height="50" />
            </Col>
            <Col span={10} className="cardCol">
              <p
                style={{
                  color: "#0a2e65",
                  fontWeight: "700",
                  fontSize: "20px",
                  margin: "0px",
                }}
              >
                {"₦ 12,200"}
              </p>
              <p style={{ color: "gray", fontWeight: "normal" }}>
                {"Amount Invested"}
              </p>
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
                {"1.20%"}
              </p>
              <p style={{ color: "gray", fontWeight: "normal" }}>
                {"Interest"}
              </p>
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
                {"26-03-2020"}
              </p>
              <p style={{ color: "gray", fontWeight: "normal" }}>
                {"Date Withdrawn"}
              </p>
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
                {"₦ 45,200"}
              </p>
              <p style={{ color: "gray", fontWeight: "normal" }}>
                {"Amount Withdrawn"}
              </p>
            </Col>
            <hr />
            <Modal
              centered
              key={"plan._id"}
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[]}
            >
              <Row>
                <Col span={24}>
                  <Row>
                    <Col span={4}>
                      <img src={SavingsImg} alt="Savings" height="50" />
                    </Col>
                    <Col span={20}>
                      <span
                        style={{
                          color: "#0a2e65",
                          fontWeight: "700",
                          display: "inline",
                          fontSize: "20px",
                          margin: "0px",
                        }}
                      >
                        {"plan.plan"}
                      </span>
                      <p style={{ color: "gray", fontWeight: "normal" }}>
                        Date
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row>
                    <Col span={12} style={{ marginBottom: "30px" }}>
                      <p style={{ margin: 0, color: "gray" }}>Amount</p>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "#0a2e65",
                          margin: 0,
                        }}
                      >
                        ₦ {`${"plan.amount"}`}
                      </p>
                    </Col>
                    <Col span={12}>
                      <p style={{ margin: 0, color: "gray" }}>Reference</p>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "#0a2e65",
                          margin: 0,
                        }}
                      >
                        {"plan._id"}
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row>
                    <Col span={12}>
                      <p style={{ margin: 0, color: "gray" }}>Status</p>
                      <CheckCircleTwoTone
                        twoToneColor="#52c41a"
                        style={{ fontSize: "30px" }}
                      />
                    </Col>
                    <Col span={12}>
                      <p style={{ margin: 0, color: "gray" }}>Debit Card</p>
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "#0a2e65",
                          margin: 0,
                        }}
                      >
                        6716{" "}
                        <img
                          src={mastercard}
                          alt="mastercard"
                          height="20"
                          width="20"
                        />
                      </span>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row>
                    <Col span={12}>
                      <Badge dot>
                        <DeleteOutlined onClick={onDelete} />
                      </Badge>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Modal>
          </Row>
        </div>
      </Fragment>
    </div>
  );
};

export default PlanHistory;
