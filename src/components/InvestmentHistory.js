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
import PlanHistory from "./PlanHistory";

const { TabPane } = Tabs;

const InvestmentHistory = () => {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Withdrawals" key="2">
          <div>
            <Col>
              <Card
                style={{
                  backgroundColor: "#f4f7fa",
                  borderTopRightRadius: "15px",
                  borderBottomLeftRadius: "15 px",
                }}
              >
                <PlanHistory />
              </Card>
            </Col>
          </div>
          <Divider />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default InvestmentHistory;
