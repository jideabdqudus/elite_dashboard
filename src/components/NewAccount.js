import React, { useState,useEffect} from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import {
  UserOutlined,
  LockOutlined,
  SmileOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import "./components.css";
import {register,
  setStateSuccess,
  Verify_otp,
  setStateError} from "../store/action/authAction";
import { Link,useHistory } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
const NewAccount = () => {
  const  dispatch = useDispatch()
  const  history = useHistory()
  const [processing, setProcessing] = useState(false)
  const [ver, setPver] = useState(false)
  const  {error,success} = useSelector(state => state.auth)
  const [otp, setOtp] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
    Otp:""
  });

  const { firstName, lastName, email, password ,confirm_password,Otp } = formData;
  const vf=()=>{
    setPver(true)
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const otp_verify=async()=>{
    console.log(Otp,email)
    await  Verify_otp({Otp,email},dispatch,history)
   setProcessing(true)

  }
  const onFinish = async () => {
    console.log(formData)
    if(firstName===""|| lastName===""|| email==="" || password==="" || confirm_password===""){
      alert('please fill all the field')
    }else{
      // console.log(firstName.length)
   await  register(formData,dispatch,history)
   setProcessing(true)


    }
    console.log(formData);
  };
  useEffect(() => {
    return () => {
    setOtp(true)
      setTimeout(()=>{
        setStateSuccess(dispatch)
        setProcessing(false)
      },7000)
    }
  }, [success])

  useEffect(() => {
    setProcessing(false)

    return () => {
      setTimeout(()=>{
        setStateError(dispatch)
      setProcessing(false)
      },7000)
    }
  }, [error])


  return (
    <div className="createForm">
      {  !ver ?
      <Card className="cardHero">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<SmileOutlined className="site-form-item-icon" />}
              type="text"
              value={firstName}
              onChange={onChange}
              name="firstName"
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}
          >
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<LikeOutlined className="site-form-item-icon" />}
              type="text"
              value={lastName}
              onChange={onChange}
              name="lastName"
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your email!" }]}
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
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
          </Form.Item>
          <Form.Item name="password" style={{ color: "#0066f5" }}>
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item name="confirm_password" style={{ color: "#0066f5" }}>
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              name="confirm_password"
              value={confirm_password}
              onChange={onChange}
              placeholder="confirm_password"
            />
          </Form.Item>
          
         
{/* otp part */}
          <Row>
            <Col span={24}>
              {" "}
              <Form.Item>
              <Button
                  type="primary"
                  block
                  htmlType="submit"
                  className="myBtn"
                  disabled={processing?true:false}
                >
                 {!processing ? 'Create acount':'processing'}
                  
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Col span={16}>
            {" "}
            <Form.Item>
              <Link
                to="/"
                style={{
                  color: "grey",
                  fontSize: ".9rem",
                  fontWeight: "bold",
                }}
              >
                Old user, <b style={{ color: "#0066f5" }}>Login</b>
              </Link>
            </Form.Item>
              <b onClick={vf} style={{ color: "#0066f5" }}>verify otp</b>

          </Col>
        </Form>
      </Card>:
      // otp form
      <Card className="cardHero">
        <Form
          name="otp"
          className="otp-form"
          initialValues={{ remember: true }}
          onFinish={otp_verify}
        >  
          <Form.Item
            rules={[{ required: true, message: "Please input your email!" }]}
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
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
          </Form.Item>
        <Form.Item    name="otp" style={{ color: "#0066f5" }}>
            <Input
              style={{
                height: "50px",
                borderRadius: "7px",
                borderColor: "#0066f5",
                fontSize: "1rem",
                border: "1px solid rgba(10,46,101,.1)",
              }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="text"
              name="Otp"
              value={Otp}
              onChange={onChange}
              placeholder="input otp"
            />
          </Form.Item>
          <Row>
            <Col span={24}>
              {" "}
              <Form.Item>
              <Button
                  type="primary"
                  block
                  htmlType="submit"
                  className="myBtn"
                  disabled={processing?true:false}
                >
                 {!processing ? 'verify otp':'processing'}
                  
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>}

{/* otp part */}

    </div>
  );
};

export default NewAccount;
