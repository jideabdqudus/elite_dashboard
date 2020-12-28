import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Row,
  Col,
  Card,
  Divider,
} from "antd";
import React,{useEffect,useState} from 'react'

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {create_investment,view_all_products } from "../store/action/authAction";
import { Link,useHistory } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
const ProductsCard = () => {
  
  const  dispatch = useDispatch()
  const  {products} = useSelector(state => state?.auth)
  // const  {error,success} = useSelector(state => state.auth)
  const  history = useHistory()
  const [update,setupdate] =useState(false)
  const onFinish = (values) => {
    console.log("Success:", values);
    create_investment(values,dispatch,history)
   setupdate(true)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // view_all_product
  const fetch = async () => {
   let allProduct = await view_all_products(dispatch,history)
   
  //  console.log(allProduct)
  };
  // useEffect(() => {
  //  setTimeout(()=>{
  //   fetch()
  // },3000)
  //   return () => {
  //     // cleanup
  //  setupdate(false)

  //   }
  // }, [update])
  return (
    <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="product_name"
          name="product_name"
          rules={[{ required: true }]}
        >
          <Row>
            <Col span={6}>
              <Input />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          label="MaturityDate"
          name="MaturityDate"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item label="Tenor" name="Tenor" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item label="Tenor-duration" name="Tenor_duration" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="intrest"
          name="intrest"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item>
          <Row>
            <Col span={6}>
              <Button type="primary" block htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
      <Divider />
      <Row gutter={[24, 24]}>
         { 
         products?.map(each=>(
        <Col span={8} className="cardCol">
          <Card className="cardHero" title={each.product_name}>
          <Row>
            <Col span={"16"}>
              <p style={{ margin: "0px", color: "red" }}>Maturity Date</p>
              <p style={{ fontSize: "22px", fontWeight: "700" }}>
              {each.MaturityDate}
              </p>
            </Col>
            <Col span={"8"}>
              <p style={{ margin: "0px", color: "red" }}>Rate</p>
              <p style={{ fontSize: "22px", fontWeight: "700" }}>{each.intrest}% pa</p>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" className="myBtn" block>
            80 days to maturity
          </Button>
          <Divider />
          <Row>
            <Col span={12}>
              <EditOutlined
                twoToneColor="#52c41a"
                style={{ fontSize: "30px" }}
              />
            </Col>
            <Col span={12}>
              <DeleteOutlined
                twoToneColor="#52c41a"
                style={{ fontSize: "30px" }}
              />
            </Col>
          </Row>
          
        </Card>
        </Col>

        ))
      //   _id: 5fe7760d43280e094474cadf,
      //   product_name: 'mr sherif  invex',
      //   intrest: 1.3,
      //   Tenor_duration: '1',
      //   MaturityDate: 2020-12-06T17:42:21.911Z,
      //   Tenor: 2020-12-08T17:42:25.657Z,
      //   createdAt: 2020-12-26T17:42:37.494Z,
      //   updatedAt: 2020-12-26T17:42:37.494Z,
      //   __v: 0
      // }
}
      
      </Row>
    </div>
  );
};

export default ProductsCard;
