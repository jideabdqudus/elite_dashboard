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
import PlanHistory from "./PlanHistory";

const PortfolioCard = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(["nickname"]);
  }, [checkNick]);

  return (
    <div>
      <Fragment>
        <div style={{ marginTop: "10px", padding: "1rem" }}>
          <Row gutter={[24, 24]}>
            <Col span={8} className="cardCol">
              <Card className="treasureCard">
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: "800",
                    color: "#0e397c",
                    marginTop: "20px",
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
                    }}
                  >
                    0 Active Investment(s)
                  </p>
                </Link>
              </Card>
            </Col>
            <Col span={8} className="cardCol">
              <Card className="fixedDepositCard">
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: "800",
                    color: "#0e397c",
                    marginTop: "20px",
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
                    }}
                  >
                    0 Active Investment(s)
                  </p>
                </Link>
              </Card>
            </Col>
            <Col span={8} className="cardCol">
              <Card className="equitiesCard">
                <p
                  style={{
                    fontSize: "23px",
                    fontWeight: "800",
                    color: "#0e397c",
                    marginTop: "20px",
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
                    }}
                  >
                    0 Active Investment(s)
                  </p>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
        <Card
          style={{
            backgroundColor: "#f4f7fa",
            borderTopRightRadius: "15px",
            borderBottomLeftRadius: "15 px",
          }}
        >
          <PlanHistory />
        </Card>
        <Divider style={{ margin: "30px" }} />
      </Fragment>
    </div>
  );
};

export default PortfolioCard;
