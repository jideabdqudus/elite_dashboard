import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Row,
  Col,
  Select,
  Card,
  Divider,
} from "antd";
import React,{useEffect,useState} from 'react'

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {create_investment,view_all_products,delete_investment } from "../store/action/authAction";
import { Link,useHistory } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
const {Option} = Select
const ProductsCard = () => {
  
  const  dispatch = useDispatch()
  const  {products} = useSelector(state => state?.auth)
  // const  {error,success} = useSelector(state => state.auth)
  const  history = useHistory()
  const [update,setupdate] =useState(false)
  const [pn,setpn] =useState('')
  const [md,setmd] =useState('')
  const [rt,setrt] =useState('')
const   changepn =(val)=>{setpn(val.target.value)}
const   changemd =(val)=>{setmd(val)
  console.log(val)
}
const   changert =(val)=>{
  // setrt(val)
   console.log(val)
}

  const onFinish = (values) => {
    console.log("Success:", values);
    console.log("Success:", values.intrest);
    setmd(values.MaturityDate)
    setpn()
    setrt()
  //   create_investment(values,dispatch,history)
  //  setupdate(true)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const delete_prod = (id)=>{
    console.log(id)
    delete_investment(dispatch,id,history)
  }
  const edit = ( value)=>{
    console.log(parseInt(value.intrest))
    console.log(value.product_name)
    console.log(value.MaturityDate)
    setmd(value.MaturityDate)
    setpn(value.product_name)
    setrt(8)
  }
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
              <Input 
              value={pn}
              onChange={changepn}
              />
            </Col>
          </Row>
        </Form.Item>

        
        <Form.Item
          label="MaturityDate"
          name="MaturityDate"
          rules={[{ required: true }]}
        >
          <Select 
          onChange={changemd}
          // defaultValue={md}
          // defaultValue="12 months"
          style={{width:120}}>
          <Option value="3 months"> 3 months</Option>
          <Option value="6 months"> 6 months</Option>
          <Option value="12 months"> 12 months</Option>
          <Option value="18 months"> 18 months</Option>
          <Option value="24 months"> 24 months</Option>

          </Select>
        </Form.Item>

        

        

        <Form.Item
          label="intrest"
          name="intrest"
          rules={[{ required: true }]}
        >
          <InputNumber 
          
          value={rt}

          onChange={changert}/>
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
              onClick={()=>{edit(each)}}
                style={{ fontSize: "30px" }}
              />
            </Col>
            <Col span={12}>
              <DeleteOutlined
              onClick={()=>{delete_prod(each._id)}}
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
