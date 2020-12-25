import React, { Fragment, useState, useEffect } from "react";
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
import "./components.css";
import { CheckCircleTwoTone, DeleteOutlined } from "@ant-design/icons";
import Plan from "../assets/emergency-plan-2.6855725.svg";
import Savings from "../assets/saving-plans.8ae6bb5.svg";
import Chart from "../assets/naira_funds_blue.77b50e2.svg";
import Drop from "../assets/plan.bffb472.svg";
import Box from "../assets/giftbox-white.90fb8b4.svg";
import Fire from "../assets/fire.svg";
import { Link } from "react-router-dom";

const DashCard = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(["nickname"]);
  }, [checkNick]);

  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const formItemLayout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const formTailLayout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 24,
      offset: 12,
    },
  };
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

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
    <div>
      <Fragment>
        <div style={{ marginTop: "10px", padding: "1rem" }}>
         
          <Row gutter={[24, 24]}>
            <Col span={6} className="cardCol">
              <Card className="cardHeros">
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: "500",
                    color: "#0e397c",
                    marginTop: "20px",
                    textAlign: "center",
                    cursor: "text"
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    Total Value of Investments
                  </a>
                </p>
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: "800",
                    color: "#0e397c",
                    marginTop: "20px",
                    textAlign: "center",
                    cursor: "text"
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    16,000,000
                  </a>
                </p>
              </Card>
            </Col>
            <Col span={6} className="cardCol">
              <Card className="cardHeros">
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: "500",
                    color: "#0e397c",
                    marginTop: "20px",
                    textAlign: "center",
                    cursor: "text"
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    Total Users on Elite Investments
                  </a>
                </p>
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: "800",
                    color: "#0e397c",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    36
                  </a>
                </p>
              </Card>
            </Col>
            <Col span={6} className="cardCol">
              <Card className="cardHeros">
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: "500",
                    color: "#0e397c",
                    marginTop: "20px",
                    textAlign: "center",
                    cursor: "text"
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    Number of Active Investors
                  </a>
                </p>
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: "800",
                    color: "#0e397c",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    9
                  </a>
                </p>
              </Card>
            </Col>
            <Col span={6} className="cardCol">
              <Card className="cardHeros">
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: "500",
                    color: "#0e397c",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    Total Number of Products
                  </a>
                </p>
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: "800",
                    color: "#0e397c",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  <a style={{ color: "#0e397c" }} href="#!">
                    3
                  </a>
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
      </div>
  );
};

export default DashCard;
