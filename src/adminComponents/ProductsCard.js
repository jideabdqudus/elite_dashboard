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

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ProductsCard = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Product Type"
          name="Product Type"
          rules={[{ required: true }]}
        >
          <Row>
            <Col span={6}>
              <Input />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          label="Maturity Date"
          name="Maturity Date"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item label="Tenor" name="Tenor" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item label="Tenor" name="Tenor" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Interest Rate"
          name="Interest Rate"
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
        <Col span={8} className="cardCol">
          <Card className="cardHero" title={"Fixed Deposit Note"}>
            <Row>
              <Col span={"16"}>
                <p style={{ margin: "0px", color: "red" }}>Maturity Date</p>
                <p style={{ fontSize: "22px", fontWeight: "700" }}>
                  Mar 01, 2021
                </p>
              </Col>
              <Col span={"8"}>
                <p style={{ margin: "0px", color: "red" }}>Rate</p>
                <p style={{ fontSize: "22px", fontWeight: "700" }}>1.50% pa</p>
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
      </Row>
    </div>
  );
};

export default ProductsCard;
