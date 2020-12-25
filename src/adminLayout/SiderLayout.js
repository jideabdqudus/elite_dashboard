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
import "../adminComponents/components.css";

import { Link } from "react-router-dom";
import DashCard from "../adminComponents/DashCard";
import Logo from "../assets/OriginateLogoOriginal.png";

const { Header, Content, Footer, Sider } = Layout;

class SiderLayout extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ backgroundColor: "#f4f7fa !important" }}>
        <Sider
          style={{
            backgroundColor: "#f4f7fa",
            border: "none",
            position: "fixed",
            zIndex: "999",
          }}
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
              to="/"
              key="1"
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
            </Menu.Item>{" "}
            <Menu.Item
              key="2"
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
            <Menu.Item
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
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={
                <DatabaseOutlined
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
              <Link to="/dashboard/history">History</Link>
            </Menu.Item>
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
              OVERVIEW
            </h1>
            <div
              className="site-layout-background"
              style={{ marginLeft: "80px" }}
            >
              <DashCard />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2020 Elite Investment{" "}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderLayout;
