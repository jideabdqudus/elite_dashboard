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
import  Api from "../config/api";
import { CheckCircleTwoTone, DeleteOutlined } from "@ant-design/icons";
import TB from "../assets/treasure-new-bg.svg";
import PlanHistory from "./PlanHistory";
import { Link,useHistory } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
const PortfolioCard = () => {
  const dispatch =useDispatch()
  const  history = useHistory()
  const [form] = Form.useForm();
  const [Myinvxt, setMyinvxt] = useState([]);//

  const [checkNick, setCheckNick] = useState(false);
  const fetch__inv= ()=>{
    Api().get("/investment/fetch__investment")
    .then(auth=>{
      console.log(auth.data.data)
      if(auth.data.data){
        setMyinvxt(auth.data.data)

      }
    })
    .catch(e=>{
    })
  
  }
  useEffect(() => {
    form.validateFields(["nickname"]);
  }, [checkNick]);
  useEffect(() => {
    fetch__inv()
    return () => {
      // cleanup
    }
  }, [])
  return (
    <div>
      <Fragment>
        <div style={{ marginTop: "10px", padding: "1rem" }}>
          <Row gutter={[24]}>
          {/* MaturityDate: "2022 -1-8"
intrest: 1.3
product_name: "product"
product_price: "4000"
remainigdate: "365"
requested_amount: 4040
transaction_date: "2021-01-07T12:14:20.000Z" */}
                   {
                   Myinvxt.map((each)=>(
                     
            <Col span={[8,16]} className="cardCol">
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
                    {each.product_name}
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
                    Active Investment(s)
                  </p>
                </Link>
              </Card>
            </Col>
            
            ))
                   
                   
          }
   
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
