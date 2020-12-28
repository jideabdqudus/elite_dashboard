import React, { Fragment } from "react";
import OtpForm from "../components/otpForm";
import "./pages.css";
import { Row, Col } from "antd";
import Originate from "../assets/OriginateOrignal.png";
import Elite from "../assets/Elite_02 2.svg";
import EliteLogo from "../assets/Elite_Logo.svg";
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <Fragment>
      <div>
        <div className="container">
          <Row className="loginRow">
            <Col span={12} className="loginHeading">
              <img
                src={EliteLogo}
                alt="Cowrywise"
                height="100px"
                width="400px"
                style={{ marginTop: "20px", marginBottom: "30px" }}
              />
              <div>
                <h1
                  style={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    color: "#0a2e65",
                    paddingTop: "0",
                    marginTop: "0",
                    lineHeight: "1.2rem",
                  }}
                >
                  Welcome,
                </h1>
                <h1
                  style={{
                    color: "rgba(195, 205, 218, 1)",
                    fontWeight: "bold",
                    fontSize: "2.3rem",
                  }}
                >
                  please input your otp
                </h1>
              </div>
            </Col>
            <Col span={12} className="loginHeading">
              {" "}
              <div>
                <OtpForm/>
              </div>
        
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
