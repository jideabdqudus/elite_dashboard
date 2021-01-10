import React from "react";
import { Layout, Menu } from "antd";
import {
  DatabaseOutlined,
  BookOutlined,
  CreditCardOutlined,
  SmileOutlined,
  TeamOutlined,
  WalletOutlined,
  BankOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import "../components/components.css";

import { Link } from "react-router-dom";
import Logo from "../assets/OriginateLogoOriginal.png";
import PlansCard from "../components/PlansCard";

const { Header, Content, Footer, Sider } = Layout;

class SiderLayout2 extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout
        style={{ minHeight: "100vh", backgroundColor: "#f4f7fa !important" }}
      >
        <Sider
          style={{
            backgroundColor: "#f4f7fa",
            border: "none",
            position: "fixed",
            zIndex: "999",
          }}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            style={{ backgroundColor: "#f4f7fa" }}
          >
            <Link to="/">
              {/* <img
                src={Logo}
                alt="Logo"
                height="70px"
                width="70px"
                style={{
                  marginTop: "70px",
                  textAlign: "center",
                  marginLeft: "0px",
                  marginBottom: "40px",
                }}
              /> */}
            </Link>
            <Menu.Item
              key="2"
              icon={
                <BankOutlined
                  style={{
                    fontSize: "20px",
                    color: "#0a2e65",
                    marginRight: "40px",
                  }}
                />
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              <Link to="/dashboard">Home</Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={
                <BookOutlined
                  style={{
                    fontSize: "20px",
                    color: "#0a2e65",
                    marginRight: "40px",
                  }}
                />
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {" "}
              <Link to="/dashboard/investments">Investments</Link>
            </Menu.Item>
            {/* <Menu.Item
              key="6"
              icon={
                <ContainerOutlined
                  style={{
                    fontSize: "20px",
                    color: "#0a2e65",
                    marginRight: "40px",
                  }}
                />
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              <Link to="/dashboard/portfolio">Portfolio</Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ backgroundColor: "#f4f7fa" }}>
          <Header
            className="site-layout-background"
            style={{ padding: 0, backgroundColor: "#f4f7fa" }}
          />
          <Content style={{ margin: "0 16px" }}>
            <h1
              style={{
                textAlign: "center",
                margin: "10px",
                fontWeight: "bolder",
              }}
            >
              ACCOUNT OVERVIEW
            </h1>
            <div
              className="site-layout-background"
              style={{ marginLeft: "80px" }}
            >
              <PlansCard />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2020 Jide Abdul-Qudus || The Qoder{" "}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderLayout2;
