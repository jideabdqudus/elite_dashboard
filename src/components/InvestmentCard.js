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
import Api from "../config/api";
// import Api from '../../config/api'

import "./components.css";
import { PaystackButton } from "react-paystack";
// import { CheckCircleTwoTone, DeleteOutlined } from "@ant-design/icons";
// import TB from "../assets/treasure-new-bg.svg";
import { Link, useHistory } from "react-router-dom";
import { view_all_products } from "../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";
const InvestmentCard = () => {
  const config = {
    reference: new Date().getTime(),
    publicKey: "pk_test_362c609bb144252cb169b991e539a4458663c06b",
  };

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { products, userData } = useSelector((state) => state?.auth);
  // console.log(products)
  const [Myinvxt, setMyinvxt] = useState([]);
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

  const handlePaystackSuccessAction = ({ reference }) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log({ reference });
    // http://localhost:8080/v1/api/paystack/callback?reference=1609997958985
    Api()
      .get(`/paystack/callback?reference=${reference}`)
      .then((auth) => {
        console.log(auth.data.data);
        // dispatch({type:USER_DATA,payload:auth.data.data})
      })
      .catch((e) => {
        console.log(e);
        // localStorage.removeItem("token")
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
  console.log(Myinvxt, "Invest");

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
            total = +each.product_price;
          });
          console.log(total);
        }
      })
      .catch((e) => {});
  };
  useEffect(() => {
    fetch__inv();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <div>
      <Fragment>
        <div style={{ marginTop: "10px", padding: "1rem" }}>
          <Row gutter={[24, 24]}>
            {Myinvxt.map((each) => (
              // product_name: "elite 200"
              // product_price: "1000"
              // remainigdate: "547"
              // requested_amount: 1010
              // transaction_date: "2021-01-07T08:37:15.000Z"

              <Col span={8} className="cardCol">
                <Card className="cardHero" title={each.product_name}>
                  <Row>
                    <Col span={"12"}>
                      <p style={{ margin: "0px", color: "#1890ff" }}>
                        Maturity Date
                      </p>
                      <p style={{ fontSize: "22px", fontWeight: "700" }}>
                        {each.MaturityDate}
                      </p>
                    </Col>
                    <Col span={"12"}>
                      <p style={{ margin: "0px", color: "#1890ff" }}>Rate</p>
                      <p style={{ fontSize: "22px", fontWeight: "700" }}>
                        {each.intrest} %
                      </p>
                    </Col>

                    <Col span={"12"}>
                      <p style={{ margin: "0px", color: "#1890ff" }}>
                        Amount invested
                      </p>
                      <p style={{ fontSize: "22px", fontWeight: "700" }}>
                        {each.product_price}
                      </p>
                    </Col>
                    <Col span={"12"}>
                      <p style={{ margin: "0px", color: "#1890ff" }}>
                        Amount expected
                      </p>
                      <p style={{ fontSize: "22px", fontWeight: "700" }}>
                        {each.intrest * each.product_price}
                      </p>
                    </Col>
                    <Col span={"24"}>
                      <p style={{ margin: "0px", color: "#1890ff" }}>
                        Days Remaining
                      </p>
                      <p style={{ fontSize: "22px", fontWeight: "700" }}>
                        {/* {each.transaction_date} */}
                        {each.remainigdate}
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div style={{ marginTop: "10px", padding: "1rem" }}>
          <Row gutter={[24, 24]}></Row>
        </div>
        <Divider style={{ margin: "30px" }} />
      </Fragment>
    </div>
  );
};

export default InvestmentCard;
