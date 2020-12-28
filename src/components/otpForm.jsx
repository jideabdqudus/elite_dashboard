import React, { useState,useEffect } from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./components.css";
import {resend_otp,Verify_otp} from "../store/action/authAction";
import { Link,useHistory } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import {setStateSuccess,setStateError} from '../store/action/authAction'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });
  const [processing, setProcessing] = useState(false)
  const [votp, setverify] = useState(false)
  const  {error,success} = useSelector(state => state.auth)

  const  dispatch = useDispatch()
  const  history = useHistory()
  const { email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const verif=()=>{
      setverify(true)
  }
  const onFinish = async () => {
    if (email === "") {
      alert("Please input your email");
    } else {
      setProcessing(true)
      
      {votp?Verify_otp(formData,dispatch,history):resend_otp(formData,dispatch,history)}
    }
  }
  useEffect(() => {

    return () => {
      setTimeout(()=>{
        setStateSuccess(dispatch)
      },4000)
    }
  }, [success])

  useEffect(() => {
    setProcessing(false)

    return () => {
      setTimeout(()=>{
        setStateError(dispatch)
      setProcessing(false)
      },4000)
    }
  }, [error])

  return (
    <div className="loginForm">

      <Card className="cardHero">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={onChange}
              name="email"
            />
          </Form.Item>
          <Row>
            <Col span={12}>
              {" "}
              <Form.Item>
                
              <Button disabled={processing?processing:false} type="primary" htmlType="submit" className="myBtn">
                 {!processing ? 'resend':'processing'}
                </Button>
              </Form.Item>
              
            </Col>
            {/* <Col span={12}>
              {" "}
              <Form.Item>
                
              <Button  onClick={verif} disabled={processing?processing:false} type="primary" htmlType="submit" className="myBtn">
                 {!processing ? 're-verify':'processing'}
                </Button>
              </Form.Item>
              
            </Col> */}
            
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
