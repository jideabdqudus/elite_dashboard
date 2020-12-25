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
      <div>
        <p
          style={{
            margin: "0 0 30px 0",
            letterSpacing: "0.8px",
            fontSize: "1rem",
            fontWeight: "700",
          }}
        >
          Investment Sumamry
        </p>
        <p style={{ margin: "30px" }}>
          You don't have any investment at the moment. Click{" "}
          <Link to="/invest">here</Link> to invest now!
        </p>
        <Divider style={{ marginBottom: "30px" }} />
      </div>
      <div>
        <div>
          <p
            style={{
              margin: "0 0 30px 0",
              letterSpacing: "0.8px",
              fontSize: "1rem",
              fontWeight: "700",
            }}
          >
            My Investment
          </p>
        </div>
        <Row gutter={[24, 24]}>
          <Col span={8} className="cardCol">
            <Card className="cardHero" title={"Fixed Deposit Note"}>
              <Row>
                <Col span={"16"}>
                  <p style={{ margin: "0px", color: "red" }}>Maturity Date</p>
                  <p style={{ fontSize: "22px", fontWeight: "700" }}>
                    Mar 01, 2021
                  </p>
                </Col>
                <Col span={"8"}>
                  <p style={{ margin: "0px", color: "red" }}>Rate</p>
                  <p style={{ fontSize: "22px", fontWeight: "700" }}>
                    1.50% pa
                  </p>
                </Col>
              </Row>
              <Button
                type="primary"
                htmlType="submit"
                className="myBtn"
                block
                onClick={showModal}
              >
                80 days to maturity
              </Button>
            </Card>
          </Col>

          <Col span={8} className="cardCol">
            <Card className="cardHero" title={"Fixed Deposit Note"}>
              <Row>
                <Col span={"16"}>
                  <p style={{ margin: "0px", color: "red" }}>Maturity Date</p>
                  <p style={{ fontSize: "22px", fontWeight: "700" }}>
                    May 04, 2021
                  </p>
                </Col>
                <Col span={"8"}>
                  <p style={{ margin: "0px", color: "red" }}>Rate</p>
                  <p style={{ fontSize: "22px", fontWeight: "700" }}>
                    1.71% pa
                  </p>
                </Col>
              </Row>
              <Button
                type="primary"
                htmlType="submit"
                className="myBtn"
                block
                onClick={showModal}
              >
                144 days to maturity
              </Button>
            </Card>
          </Col>
          <Col span={8} className="cardCol">
            <Card className="cardHero" title={"Treasury Bill"}>
              <Row>
                <Col span={"16"}>
                  <p style={{ margin: "0px", color: "red" }}>Maturity Date</p>
                  <p style={{ fontSize: "22px", fontWeight: "700" }}>
                    Aug 26, 2021
                  </p>
                </Col>
                <Col span={"8"}>
                  <p style={{ margin: "0px", color: "red" }}>Rate</p>
                  <p style={{ fontSize: "22px", fontWeight: "700" }}>
                    1.01% pa
                  </p>
                </Col>
              </Row>
              <Button
                type="primary"
                htmlType="submit"
                className="myBtn"
                block
                onClick={showModal}
              >
                280 days to maturity
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{ margin: "100px" }}>
        <Divider />
      </div>
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
          <Button key="submit" type="primary" onClick={onCheck}>
            Proceed
          </Button>,
        ]}
      >
        <Row>
          <Col span={24}>
            <Row>
              <Col
                span={12}
                onClick={showModal}
                style={{ marginBottom: "30px" }}
              >
                <p style={{ margin: 0, color: "gray" }}>Instrument Type</p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0a2e65",
                    margin: 0,
                  }}
                >
                  Fixed Deposit Note
                </p>
              </Col>
              <Col span={12} style={{ marginBottom: "30px" }}>
                <p style={{ margin: 0, color: "gray" }}>Vendor</p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0a2e65",
                    margin: 0,
                  }}
                >
                  Sterling Bank
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={12} style={{ marginBottom: "30px" }}>
                <p style={{ margin: 0, color: "gray" }}>Maturity Date</p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0a2e65",
                    margin: 0,
                  }}
                >
                  Mar 01. 2021
                </p>
              </Col>
              <Col span={12}>
                <p style={{ margin: 0, color: "gray" }}>Tenor</p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0a2e65",
                    margin: 0,
                  }}
                >
                  80 days
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={12}>
                <CheckCircleTwoTone
                  twoToneColor="#52c41a"
                  style={{ fontSize: "30px" }}
                />
              </Col>
              <Col span={12}>
                <p style={{ margin: 0, color: "gray" }}>Interest Rate</p>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0a2e65",
                    margin: 0,
                  }}
                >
                  1.40%
                </span>
              </Col>
            </Row>
          </Col>
          <Col span={24} style={{ marginTop: "30px" }}>
            <Card className="cardHero">
              <Form form={form} name="dynamic_rule">
                <label
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#0a2e65",
                    marginBottom: "30px",
                  }}
                >
                  How much would you like to Invest?{" "}
                </label>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "This field is compulsory",
                    },
                  ]}
                >
                  <Input placeholder="NGN(₦)" />
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <div style={{ margin: "20px" }}>
            <p>
              * The minimum amount you can invest in this instrument is ₦100,000{" "}
            </p>
            <p>
              * The Fixed Deposit Notes we are offering are held-to-maturity
              investments.
            </p>
          </div>
        </Row>
      </Modal>
    </div>
  );
};

export default DashCard;
