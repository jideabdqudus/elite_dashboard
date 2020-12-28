import React from "react";
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
  Tabs,
} from "antd";
import { Link } from "react-router-dom";
import "./components.css";

const { TabPane } = Tabs;

const InvestmentHistory = () => {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Investments" key="1">
          <Row>
            <Col span={8} className="cardCol">
              <Card className="cardHero" title={"Fixed Deposit Note"}>
                <Row>
                  <Col span={"16"}>
                    <p style={{ margin: "0px", color: "red" }}>
                      Investment Date
                    </p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      Dec 24, 2020
                    </p>
                  </Col>
                  <Col span={"8"}>
                    <p style={{ margin: "0px", color: "red" }}>Amount</p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      ₦120,000
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={8} className="cardCol">
              <Card className="cardHero" title={"Fixed Deposit Note"}>
                <Row>
                  <Col span={"16"}>
                    <p style={{ margin: "0px", color: "red" }}>
                      Investment Date
                    </p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      Oct 1, 2020
                    </p>
                  </Col>
                  <Col span={"8"}>
                    <p style={{ margin: "0px", color: "red" }}>Amount</p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      ₦300,000
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Withdrawals" key="2">
          <Row>
            <Col span={8} className="cardCol">
              <Card className="cardHero" title={"Fixed Deposit Note"}>
                <Row>
                  <Col span={"16"}>
                    <p style={{ margin: "0px", color: "red" }}>
                      Withdrawal Date
                    </p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      Dec 25, 2020
                    </p>
                  </Col>
                  <Col span={"8"}>
                    <p style={{ margin: "0px", color: "red" }}>Amount</p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      ₦210,000
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={8} className="cardCol">
              <Card className="cardHero" title={"Fixed Deposit Note"}>
                <Row>
                  <Col span={"16"}>
                    <p style={{ margin: "0px", color: "red" }}>
                      Withdrawal Date
                    </p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      Oct 9, 2020
                    </p>
                  </Col>
                  <Col span={"8"}>
                    <p style={{ margin: "0px", color: "red" }}>Amount</p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      ₦40,000
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default InvestmentHistory;
