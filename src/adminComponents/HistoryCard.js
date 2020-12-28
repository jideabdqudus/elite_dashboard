import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Badge,
  Divider,
  Modal,
  Form,
  Input,
  Button,
  Checkbox,
} from "antd";

const HistoryCard = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(true);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <div>
      <h1>Closed Investments</h1>
      <Divider />
      <Row>
        <Col span={8} className="cardCol">
          <Card className="cardHero" title={"Fixed Deposit Note"}>
            <Row>
              <Col span={"16"}>
                <p style={{ margin: "0px", color: "red" }}>Closure Date</p>
                <p style={{ fontSize: "22px", fontWeight: "700" }}>
                  May 04, 2021
                </p>
              </Col>
              <Col span={"8"}>
                <p style={{ margin: "0px", color: "red" }}>Product</p>
                <p style={{ fontSize: "22px", fontWeight: "700" }}>Chamdor</p>
              </Col>
            </Row>
            <Button
              type="primary"
              htmlType="submit"
              className="myBtn"
              block
              onClick={showModal}
            >
              CLOSED
            </Button>
          </Card>
        </Col>
      </Row>
      <Modal
        title={"Fixed Deposit Note"}
        centered
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <Row>
          <Col span={24}>
            <Row>
              <Col
                span={24}
                onClick={showModal}
                style={{ marginBottom: "30px" }}
              >
                <p style={{ margin: 0, color: "gray" }}>Investors</p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0a2e65",
                    margin: 0,
                  }}
                >
                  Sodeeq Ajadi,{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#0a2e65",
                      margin: 0,
                    }}
                  >
                    jdoao@gmail.com
                  </span>
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0a2e65",
                    margin: 0,
                  }}
                >
                  Aremu Aisha,{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#0a2e65",
                      margin: 0,
                    }}
                  >
                    aishao@gmail.com
                  </span>
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0a2e65",
                    margin: 0,
                  }}
                >
                  Ogbonna Wale,{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#0a2e65",
                      margin: 0,
                    }}
                  >
                    ogna@gmail.com
                  </span>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default HistoryCard;
