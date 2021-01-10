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
import Api from '../config/api'
// import Api from '../../config/api'

import "./components.css";
import { PaystackButton } from 'react-paystack';
// import { CheckCircleTwoTone, DeleteOutlined } from "@ant-design/icons";
// import TB from "../assets/treasure-new-bg.svg";
import { Link ,useHistory} from "react-router-dom";
import { view_all_products} from "../store/action/authAction";
import { useDispatch,useSelector} from "react-redux";
const InvestmentCard = () => {
  const config = {
    reference: (new Date()).getTime(),
    publicKey: 'pk_test_362c609bb144252cb169b991e539a4458663c06b',
  };

  const [form] = Form.useForm();
  const  dispatch = useDispatch()
  const  history = useHistory()
  const {products,userData}= useSelector(state=>state?.auth)
// console.log(products)
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
 
const handlePaystackSuccessAction = ({reference}) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log({reference});
      // http://localhost:8080/v1/api/paystack/callback?reference=1609997958985
      Api().get(`/paystack/callback?reference=${reference}`)
      .then(auth=>{
        console.log(auth.data.data)
        // dispatch({type:USER_DATA,payload:auth.data.data})
      }
        )
      .catch(e=>{
        console.log(e)
  // localStorage.removeItem("token")
      })

    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'invest',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };
  return (
    <div>
      <Fragment>
        <div style={{ marginTop: "10px", padding: "1rem" }}>
        <Row gutter={[24, 24]}>

          {products.map(eachproduct=>(
            
            <Col span={8} className="cardCol">
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
                     {eachproduct.product_name}
                  </a>
                  <br/>
                  <a style={{ color: "#0e397c" }} href="#!">
                   #{eachproduct.price}
                  </a>
                  <br/>
                  <a style={{ color: "#0e397c" }} href="#!">
                  {eachproduct.intrest}%
                  </a>
                  
                  <br/>
                  <a style={{ color: "#0e397c" }} href="#!">
                  {eachproduct.MaturityDate}
                  </a>
                </p>
                <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#0e397c",
                      marginTop: "20px",
                      textAlign: "center",
                    }}
                  >
                <a style={{ color: "#0e397c" }} href="#!">
                  {eachproduct.MaturityDate}
                  </a>
                  </p>
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
                      amount={eachproduct.price * 100 *1.01}
                      email={userData?.email}
                      metadata={{...userData,
                        product_name:eachproduct.product_name,
                        product_price:eachproduct.price, 
                        MaturityDate:eachproduct.MaturityDate, 
                        intrest:eachproduct.intrest, 
                      }}
                    />
                    
                  </p>
                {/* </Link> */}
              </Card>
            </Col>
            
          ))}
          </Row>


        </div>
        <div style={{ marginTop: "10px", padding: "1rem" }}>
          <Row gutter={[24, 24]}>
          </Row>
        </div>
        <Divider style={{ margin: "30px" }} />
      </Fragment>
    </div>
  );
};

export default InvestmentCard;
