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
import { view_all_products } from "../store/action/authAction.js";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Api from "../config/api";
import { PaystackButton } from "react-paystack";

const DashCard = () => {
  const config = {
    reference: new Date().getTime(),
    publicKey: "pk_test_362c609bb144252cb169b991e539a4458663c06b",
  };

  const { error, userData, success, products } = useSelector(
    (state) => state?.auth
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false); //
  const [Myinvxt, setMyinvxt] = useState([]); //
  const [total, setTotal] = useState(0); //
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
  const fetch__inv = () => {
    Api()
      .get("/investment/fetch__investment")
      .then((auth) => {
        console.log(auth.data.data);
        if (auth.data.data) {
          setMyinvxt(auth.data.data);
          let total = 0;
          auth.data.data.map((each) => {
            total += +each.product_price;

          });
          setTotal(total)
        }
      })
      .catch((e) => {});
  };
  useEffect(() => {
    fetch__inv();
    view_all_products(dispatch,history)
    return () => {
      // cleanup
    };
  }, []);

  const handlePaystackSuccessAction = ({ reference }) => {
    Api()
      .get(`/paystack/callback?reference=${reference}`)
      .then((auth) => {
        console.log(auth.data.data);
        // dispatch({type:USER_DATA,payload:auth.data.data})
      })
      .catch((e) => {
      });
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "invest",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div>
      <Fragment>
        <div style={{ marginTop: "10px", padding: "1rem" }}>
          <div style={{ marginBottom: "60px" }}>
            <p
              style={{
                opacity: ".3",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "0.1em",
              }}
            >
              Hello,{" "}
            </p>
            <h1
              style={{
                color: "rgba(10,46,101)",
                opacity: ".3",
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "1.1em",
              }}
            >
              {userData.firstName}-{userData.lastName}
            </h1>
          </div>
          <Row gutter={[24, 24]}>
            <Col span={8} className="cardCol">
              <Card className="equitiesCard">
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
                    Current Investment Value
                    {/* {Myinvxt.map(()=>(
                      
                    ))} */}
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
                    ₦{total}
                  </a>
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
      {/* <div>
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
      </div> */}
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
            Investments
          </p>
        </div>
        <Row gutter={[24, 24]}>
          {products.map((eachproduct) => (
            <Col span={8} className="cardCol">
              <Card className="cardHero">
                <Row>
                  <Col span={"12"}>
                    <p style={{ margin: "0px", color: "#1890ff" }}>
                      Product Name
                    </p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      {eachproduct.product_name}
                    </p>
                  </Col>
                  <Col span={"12"}>
                    <p style={{ margin: "0px", color: "#1890ff" }}>Price</p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      ₦{eachproduct.price}
                    </p>
                  </Col>
                  <Col span={"12"}>
                    <p style={{ margin: "0px", color: "#1890ff" }}>Interest</p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      {eachproduct.intrest}%
                    </p>
                  </Col>
                  <Col span={"12"}>
                    <p style={{ margin: "0px", color: "#1890ff" }}>Naturity</p>
                    <p style={{ fontSize: "22px", fontWeight: "700" }}>
                      {eachproduct.MaturityDate}
                    </p>
                  </Col>
                </Row>
                {/* <Link to="/dashboard"> */}
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#0e397c",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  {/* Proceed */}
                  <PaystackButton
                    {...componentProps}
                    amount={eachproduct.price * 100 * 1.01}
                    email={userData?.email}
                    type="primary"
                    htmlType="submit"
                    className="myBtn"
                    
                    metadata={{
                      ...userData,
                      product_name: eachproduct.product_name,
                      product_price: eachproduct.price,
                      MaturityDate: eachproduct.MaturityDate,
                      intrest: eachproduct.intrest,
                    }}
                  />
                </p>
                {/* </Link> */}
              </Card>
            </Col>
          ))}
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
