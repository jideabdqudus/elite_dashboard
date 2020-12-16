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
import TB from "../assets/treasure-new-bg.svg";
import { Link } from "react-router-dom";

const InvestmentCard = () => {
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
            <Col span={8}>
              <Card className="treasureCard">
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
                    Treasury Bills
                  </a>
                </p>
                <Link to="/dashboard">
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#0e397c",
                      marginTop: "20px",
                      textAlign: "center",
                    }}
                  >
                    Proceed
                  </p>
                </Link>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="fixedDepositCard">
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
                    Fixed Deposit Notes
                  </a>
                </p>
                <Link to="/dashboard">
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#0e397c",
                      marginTop: "20px",
                      textAlign: "center",
                    }}
                  >
                    Proceed
                  </p>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "10px", padding: "1rem" }}>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Card className="equitiesCard">
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
                    Equities
                  </a>
                </p>
                <Link to="/dashboard">
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#0e397c",
                      marginTop: "20px",
                      textAlign: "center",
                    }}
                  >
                    Proceed
                  </p>
                </Link>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="bondsCard">
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
                    Bonds
                  </a>
                </p>
                <Link to="/dashboard">
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#0e397c",
                      marginTop: "20px",
                      textAlign: "center",
                    }}
                  >
                    Proceed
                  </p>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
        <Divider style={{ margin: "30px" }} />
      </Fragment>
    </div>
  );
};

export default InvestmentCard;
