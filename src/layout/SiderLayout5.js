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
import PortfolioCard from "../components/PortfolioCard";
import Logo from "../assets/OriginateLogoOriginal.png";

const { Header, Content, Footer, Sider } = Layout;

class SiderLayout5 extends React.Component {
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
          <Menu mode="inline" key={"3"} style={{ backgroundColor: "#f4f7fa" }}>
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
            </Menu.Item>{" "}
            <Menu.Item
              to="/dashboard/investments"
              key="9"
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
              to="/dashboard/portfolio"
              defaultSelectedKeys={["1"]}
              key="1"
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
              PORTFOLIO
            </h1>
            <div
              className="site-layout-background"
              style={{ marginLeft: "80px" }}
            >
              <PortfolioCard />
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

export default SiderLayout5;
